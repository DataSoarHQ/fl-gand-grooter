import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { handleForm, MAX_RESUME_BYTES } from '../src/lib/forms.js';

const req = (body) => new Request('http://x/api/form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body) });
const multipart = (fields) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.append(k, v);
  return new Request('http://x/api/form', { method: 'POST', body: fd });
};
const good = { form: 'callback', firstName: 'Pat', lastName: 'Lee', phone: '(239) 555-0100', email: 'pat@example.com', zip: '33904', service: 'Drain and Sewer Cleaning', urgency: 'Today', message: 'Kitchen sink\nbacked up' };
const env = { key: 'k', to: 'a@x.com, b@x.com', from: 'site@x.com' };
const POST = (request, config = env) => handleForm(request, config);
const realFetch = globalThis.fetch;
const realError = console.error;
let sent;

beforeEach(() => {
  sent = [];
  console.error = () => {};
  globalThis.fetch = async (url, init) => { sent.push({ url, body: JSON.parse(init.body) }); return new Response('{}', { status: 200 }); };
});
afterEach(() => { globalThis.fetch = realFetch; console.error = realError; });

test('sends a callback request to every recipient, then an auto-reply', async () => {
  const res = await POST(req(good));
  assert.equal(res.status, 200);
  assert.deepEqual(sent[0].body.to, ['a@x.com', 'b@x.com']);
  assert.equal(sent[0].body.reply_to, 'pat@example.com');
  assert.match(sent[0].body.subject, /Drain and Sewer Cleaning from Pat Lee/);
  assert.match(sent[0].body.text, /Phone: \(239\) 555-0100/);
  assert.match(sent[0].body.text, /Zip code: 33904/);
  assert.match(sent[0].body.text, /Kitchen sink\nbacked up/);
  assert.deepEqual(sent[1].body.to, ['pat@example.com']);
  assert.match(sent[1].body.text, /239/);
});

test('skips the auto-reply when no email is given', async () => {
  await POST(req({ ...good, email: '' }));
  assert.equal(sent.length, 1);
});

test('rejects bad input without sending', async () => {
  for (const body of [{ ...good, firstName: ' ' }, { ...good, phone: '12345' }, { ...good, email: 'nope' }, { ...good, form: 'payment', address: '' }, { ...good, form: 'application', position: '' }, 'not json', 'null', '[]']) {
    assert.equal((await POST(req(body))).status, 400, JSON.stringify(body));
  }
  assert.equal(sent.length, 0);
});

test('drops honeypot submissions silently', async () => {
  const res = await POST(req({ ...good, company: 'spam inc' }));
  assert.equal(res.status, 200);
  assert.equal(sent.length, 0);
});

test('strips line breaks from the subject', async () => {
  await POST(req({ ...good, firstName: 'Pat\r\nBcc: x@y.com' }));
  assert.ok(!/[\r\n]/.test(sent[0].body.subject));
});

test('payment details include the address and amount', async () => {
  const res = await POST(req({ form: 'payment', firstName: 'Sam', lastName: 'Ray', phone: '2395550101', address: '123 Main St, Cape Coral', invoice: 'A-100', amount: '$250' }));
  assert.equal(res.status, 200);
  assert.match(sent[0].body.subject, /Payment details from Sam Ray \(\$250\)/);
  assert.match(sent[0].body.text, /Service address: 123 Main St, Cape Coral/);
});

test('job applications attach the resume and can go to a separate inbox', async () => {
  const resume = new File(['%PDF-1.4 hello'], 'My Resume.pdf', { type: 'application/pdf' });
  const res = await POST(multipart({ form: 'application', firstName: 'Jo', lastName: 'Kim', phone: '239-555-0102', email: 'jo@example.com', position: 'Lead Drain Technician', resume }), { ...env, jobsTo: 'jobs@x.com' });
  assert.equal(res.status, 200);
  assert.deepEqual(sent[0].body.to, ['jobs@x.com']);
  assert.equal(sent[0].body.attachments[0].filename, 'My Resume.pdf');
  assert.equal(Buffer.from(sent[0].body.attachments[0].content, 'base64').toString(), '%PDF-1.4 hello');
});

test('rejects oversized or unexpected resume files', async () => {
  const big = new File([new Uint8Array(MAX_RESUME_BYTES + 1)], 'r.pdf');
  const exe = new File(['x'], 'r.exe');
  for (const resume of [big, exe]) {
    const res = await POST(multipart({ form: 'application', firstName: 'Jo', phone: '2395550102', position: 'Office / Dispatch', resume }));
    assert.equal(res.status, 400);
  }
  assert.equal(sent.length, 0);
});

test('reports failure when email is not configured', async () => {
  for (const missing of ['key', 'to', 'from']) {
    assert.equal((await POST(req(good), { ...env, [missing]: undefined })).status, 503);
  }
  assert.equal(sent.length, 0);
});

test('reports failure when the email provider rejects or is unreachable', async () => {
  globalThis.fetch = async () => new Response('nope', { status: 422 });
  assert.equal((await POST(req(good))).status, 502);
  globalThis.fetch = async () => { throw new Error('down'); };
  assert.equal((await POST(req(good))).status, 502);
});

test('a failed auto-reply does not fail the request', async () => {
  let n = 0;
  globalThis.fetch = async () => (++n === 1 ? new Response('{}', { status: 200 }) : new Response('bad', { status: 500 }));
  assert.equal((await POST(req(good))).status, 200);
});
