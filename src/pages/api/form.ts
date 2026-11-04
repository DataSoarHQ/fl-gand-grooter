import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { handleForm } from '../../lib/forms.js';
import { business } from '../../data/site';

export const prerender = false;

export const POST: APIRoute = ({ request }) =>
  handleForm(request, {
    key: getSecret('RESEND_API_KEY'),
    to: getSecret('QUOTE_TO_EMAIL'),
    from: getSecret('QUOTE_FROM_EMAIL'),
    jobsTo: getSecret('JOBS_TO_EMAIL'),
    phone: business.phoneDisplay,
  });
