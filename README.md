# G&G Rooter Florida website

Florida branch site for G&G Rooter LLC, served at `https://fl.gandgrooter.com`. It mirrors the design and structure of the main Wisconsin site (www.gandgrooter.com, on Wix), with content rewritten for Lee County, FL. The project brief is in `docs/GG_Rooter_Florida_Website_To-Do.pdf`.

Static [Astro](https://astro.build) site with one Vercel function for the website forms.

```sh
npm install
npm run dev     # local site
npm test        # form endpoint tests
npm run build   # output in .vercel/output/
```

## Editing content

Business facts, services, reviews, FAQs and job options are in `src/data/site.ts`. The 20 Lee County service areas and their page text are in `src/data/areas.ts`; adding an entry there creates the page at `/drain-cleaning-<slug>/`. Photos are listed in `src/data/photos.ts`, and the hero videos are in `public/media/`.

## Settings to flip in `src/data/site.ts`

| Setting | What it does |
| --- | --- |
| `launch` | `false` keeps every page `noindex` and makes `robots.txt` block crawlers. Set to `true` after sign-off, then submit `https://fl.gandgrooter.com/sitemap-index.xml` in Google Search Console. |
| `googleReviewUrl`, `googleMapsUrl` | Florida Google Business Profile links. The "Leave us a review on Google" button appears once `googleReviewUrl` is filled in. |
| `paymentUrl` | A Stripe or Square payment link. When set, the payments page shows a "Pay Online Now" button. When blank, the page only collects invoice details and the office follows up. |
| `gaId` | Google Analytics 4 measurement ID. Blank means no tracking code. |

## Forms

The callback form (contact page, service pages, area pages), the payments form and the job application all post to `src/pages/api/form.ts`, which emails the office through [Resend](https://resend.com) and sends the customer a short confirmation if they gave an email address. Job applications can attach a resume (up to 4 MB). Until the settings below exist, the forms tell visitors their message wasn't sent and ask them to call.

For local use, copy `.env.example` to `.env`. In production, add the same values in the Vercel project's environment variables.

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `QUOTE_TO_EMAIL` | Inbox that receives callback and payment requests (comma-separated for several) |
| `QUOTE_FROM_EMAIL` | Sender on a domain verified in Resend, such as `G&G Rooter Florida <website@gandgrooter.com>` |
| `JOBS_TO_EMAIL` | Optional. Inbox for job applications. Falls back to `QUOTE_TO_EMAIL`. |

Verifying `gandgrooter.com` in Resend means adding the DNS records Resend lists wherever the domain's DNS is hosted. Don't change existing `MX` or root `SPF` records.

## Launch

1. Add `fl.gandgrooter.com` to the Vercel project.
2. Add one `CNAME` record for `fl` pointing to the target Vercel shows (usually `cname.vercel-dns.com`) wherever the `gandgrooter.com` DNS lives. Wix-managed DNS supports this under Domains > Manage DNS Records. Leave the root and `www` records alone so the Wisconsin site is untouched.
3. Vercel issues the SSL certificate once the record resolves.
4. Set `launch: true`, deploy, and submit the sitemap in Search Console.
