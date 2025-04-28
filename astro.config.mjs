// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://rising3.github.io',
	base: '/ngnb-design',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
