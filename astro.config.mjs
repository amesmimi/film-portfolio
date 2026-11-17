// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages:
//  - project repo  (github.com/amesmimi/film-portfolio) -> base '/film-portfolio'
//  - user site repo (github.com/amesmimi/amesmimi.github.io) -> base '/'
// Override at build time with SITE_BASE if you rename the repo.
const base = process.env.SITE_BASE ?? '/film-portfolio';

export default defineConfig({
  site: 'https://amesmimi.github.io',
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
