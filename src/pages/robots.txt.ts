import type { APIRoute } from 'astro';
import { business as b } from '../data/site';

// Crawlers stay out until business.launch is set to true in src/data/site.ts.
export const GET: APIRoute = () => {
  const body = b.launch
    ? `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${b.url}/sitemap-index.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
