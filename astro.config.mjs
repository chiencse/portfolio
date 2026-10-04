// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages as a project site: https://chiencse.github.io/portfolio
export default defineConfig({
  site: 'https://chiencse.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rolldownOptions: {
        // Astro's MDX pipeline emits a harmless "use astro:head-inject" directive warning per post.
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
          warn(warning);
        },
      },
    },
  },
});
