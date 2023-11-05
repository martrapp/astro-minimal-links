import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/redirect-page1": "http://google.com/",
    "/redirect-page2": "/page2",
    "/redirect-page3": "http://google.com/",
    "/redirect-page4": "/page4"
  },
  integrations: [react(), vue()]
});