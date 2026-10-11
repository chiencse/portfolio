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
  // The investing series used to be 7 posts; keep the old links working.
  redirects: {
    '/blog/dau-tu-1-nhap-mon': '/portfolio/blog/chung-khoan-cho-nguoi-moi/',
    '/blog/dau-tu-2-co-che-giao-dich': '/portfolio/blog/chung-khoan-cho-nguoi-moi/',
    '/blog/dau-tu-3-phan-tich-co-ban': '/portfolio/blog/phan-tich-co-phieu/',
    '/blog/dau-tu-4-phan-tich-ky-thuat': '/portfolio/blog/phan-tich-co-phieu/',
    '/blog/dau-tu-5-quan-tri-rui-ro': '/portfolio/blog/rui-ro-tam-ly-va-chien-luoc-dau-tu/',
    '/blog/dau-tu-6-tam-ly-va-cac-bay': '/portfolio/blog/rui-ro-tam-ly-va-chien-luoc-dau-tu/',
    '/blog/dau-tu-7-chien-luoc-va-quy': '/portfolio/blog/rui-ro-tam-ly-va-chien-luoc-dau-tu/',
  },
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
