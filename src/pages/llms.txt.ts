import type { APIRoute } from 'astro';
import { areaHref, areas } from '../data/areas';
import { business as b, faqGroups, moreNav, services, serviceHref } from '../data/site';

// A plain-text summary of the Florida branch for AI assistants and text-only readers.
const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

export const GET: APIRoute = () => {
  const body = `# ${b.name} Florida

> Family-owned drain and sewer company serving all of ${b.regionLong}. Drain cleaning, sewer cleaning, sewer camera inspections, sewage and water damage cleanup, and mold mitigation. Open 24 hours, 7 days a week. This is the Florida branch of ${b.legalName} (${b.mainSite}/).

## Contact

- Phone: ${b.phoneDisplay}
- Hours: ${b.hours}
- Website: ${b.url}/
- Request a callback: ${b.url}/contact/

## Services

${list(services.map((s) => `[${s.name}](${b.url}${serviceHref(s)}): ${s.card}`))}

## Service areas (Lee County, FL)

${list(areas.map((a) => `[${a.name}, FL](${b.url}${areaHref(a)})`))}

## Pages

${list(moreNav.map((n) => `[${n.label}](${b.url}${n.href})`))}

## Common questions

${faqGroups.flatMap((g) => g.items).map((f) => `### ${f.q}\n\n${f.a.join(' ')}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
