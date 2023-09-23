import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  redirects: {
    "/redirect-page1": "http://google.com/",
    "/redirect-page2": "/page2",
    "/redirect-page3": "http://google.com/",
    "/redirect-page4": "/page4",
  },
});
