// Validates website form submissions and emails them to the office through Resend.
// Three forms post here: service callbacks, payment details and job applications.
const json = (body, status) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (value, max) => String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const RESUME_TYPES = /\.(pdf|docx?|rtf|txt|odt|jpe?g|png)$/i;

const KINDS = {
  callback: {
    subject: (d) => `Service request: ${d.service || 'Website'} from ${d.name}`,
    fields: [['Service needed', 'service'], ['Urgency', 'urgency'], ['Zip code', 'zip'], ['Sent from page', 'page']],
    reply: 'We got your service request and will call you back shortly.',
  },
  payment: {
    subject: (d) => `Payment details from ${d.name}${d.amount ? ` (${d.amount})` : ''}`,
    fields: [['Service address', 'address'], ['Invoice number', 'invoice'], ['Payment amount', 'amount']],
    reply: 'We got your payment details. Our office will contact you to finish the payment securely.',
  },
  application: {
    subject: (d) => `Job application: ${d.position || 'General'} from ${d.name}`,
    fields: [['Position', 'position'], ['Experience', 'experience'], ['Earliest start', 'start'], ['On-call, evenings or weekends', 'oncall']],
    reply: 'Thanks for applying to G&G Rooter. We’ll review your application and reach out if it’s a fit.',
  },
};

async function read(request) {
  const type = request.headers.get('content-type') || '';
  if (type.includes('multipart/form-data')) {
    const form = await request.formData();
    const data = {};
    for (const [k, v] of form.entries()) data[k] = v;
    return data;
  }
  const data = await request.json();
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('bad body');
  return data;
}

const send = (key, body) =>
  fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

export async function handleForm(request, { key, to, from, jobsTo, phone = '(239) 994-0524' }) {
  let data;
  try {
    data = await read(request);
  } catch {
    return json({ error: 'The request could not be read.' }, 400);
  }

  // Bots fill the hidden field. Report success so they don't retry.
  if (clean(data.company, 200)) return json({ ok: true }, 200);

  const kind = KINDS[clean(data.form, 20)] ? clean(data.form, 20) : 'callback';
  const spec = KINDS[kind];
  const d = {
    name: clean(`${clean(data.firstName, 60)} ${clean(data.lastName, 60)}`, 121),
    phone: clean(data.phone, 30),
    email: clean(data.email, 200),
  };
  for (const [, field] of spec.fields) d[field] = clean(data[field], 300);
  const message = String(typeof data.message === 'string' ? data.message : '').trim().slice(0, 4000);

  if (!clean(data.firstName, 60)) return json({ error: 'Enter your first name so we know who to ask for.' }, 400);
  if (d.phone.replace(/\D/g, '').length < 10) return json({ error: 'Enter a 10-digit phone number so we can reach you.' }, 400);
  if (d.email && !isEmail(d.email)) return json({ error: 'Check the email address, or leave it blank.' }, 400);
  if (kind === 'payment' && !d.address) return json({ error: 'Enter the service address so we can find your invoice.' }, 400);
  if (kind === 'application' && !d.position) return json({ error: 'Choose the position you’re applying for.' }, 400);

  const attachments = [];
  const resume = data.resume;
  if (kind === 'application' && resume && typeof resume === 'object' && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) return json({ error: 'Your resume is larger than 4 MB. Try a PDF, or email it to us instead.' }, 400);
    if (!RESUME_TYPES.test(resume.name || '')) return json({ error: 'Upload your resume as a PDF, Word document or image.' }, 400);
    const bytes = Buffer.from(await resume.arrayBuffer());
    attachments.push({ filename: clean(resume.name, 120).replace(/[^\w.\- ]/g, '_'), content: bytes.toString('base64') });
  }

  const recipients = (kind === 'application' && jobsTo ? jobsTo : to) || '';
  if (!key || !recipients || !from) {
    console.error('Website forms are not configured: missing email environment variables.');
    return json({ error: 'not_configured' }, 503);
  }

  const lines = [
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Email: ${d.email || 'not given'}`,
    ...spec.fields.map(([label, field]) => `${label}: ${d[field] || 'not given'}`),
    ...(attachments.length ? [`Resume: attached (${attachments[0].filename})`] : []),
    '',
    message || '(no message)',
    '',
    'Sent from the G&G Rooter Florida website.',
  ];

  const res = await send(key, {
    from,
    to: recipients.split(',').map((x) => x.trim()).filter(Boolean),
    subject: spec.subject(d),
    ...(d.email ? { reply_to: d.email } : {}),
    text: lines.join('\n'),
    ...(attachments.length ? { attachments } : {}),
  }).catch((err) => {
    console.error('Form email request failed:', err);
    return null;
  });

  if (!res || !res.ok) {
    if (res) console.error('Resend rejected the form email:', res.status, await res.text());
    return json({ error: 'send_failed' }, 502);
  }

  // Confirmation to the customer. The office already has the request, so a
  // failure here is logged and otherwise ignored.
  if (d.email) {
    const first = clean(data.firstName, 60);
    await send(key, {
      from,
      to: [d.email],
      subject: 'We got your message | G&G Rooter',
      text: [`Hi ${first},`, '', spec.reply, '', `Need help right away? Call us any time, 24/7, at ${phone}.`, '', 'G&G Rooter', 'Drain, sewer, cleanup and mold mitigation in Lee County, FL'].join('\n'),
    })
      .then(async (r) => { if (!r.ok) console.error('Auto-reply rejected:', r.status, await r.text()); })
      .catch((err) => console.error('Auto-reply failed:', err));
  }

  return json({ ok: true }, 200);
}
