import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL
const SITE_URL = 'https://mixx.it.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
