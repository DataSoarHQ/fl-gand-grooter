import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const secret = () => envField.string({ context: 'server', access: 'secret', optional: true });

export default defineConfig({
  site: 'https://fl.gandgrooter.com',
  adapter: vercel(),
  integrations: [sitemap()],
  env: {
    schema: {
      RESEND_API_KEY: secret(),
      QUOTE_TO_EMAIL: secret(),
      QUOTE_FROM_EMAIL: secret(),
      JOBS_TO_EMAIL: secret(),
    },
  },
});
