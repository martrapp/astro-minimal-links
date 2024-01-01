import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/redirect-page1": "http://google.com/",
    "/redirect-page2": "/page2",
    "/redirect-page3": "http://google.com/",
    "/redirect-page4": "/page4",
  },
});
