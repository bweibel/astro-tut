// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://zesty-kangaroo-271f70.netlify.app/",
  integrations: [preact()]
});