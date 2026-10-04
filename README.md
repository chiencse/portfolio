# chiencse — portfolio & blog

Personal site of **Nông Minh Chiến** — live at **https://chiencse.github.io/portfolio**.

Built with [Astro](https://astro.build), Tailwind CSS v4 and MDX. Static, no client framework, ships almost no JavaScript.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node 22.12+.

## Editing content

| What                                   | Where                                   |
| -------------------------------------- | --------------------------------------- |
| Name, intro, links, experience, projects, skills | `src/data/site.ts`            |
| CV                                     | `public/cv.pdf`                         |
| Avatar, project screenshots, logos     | `src/assets/`                           |
| Blog posts                             | `src/content/blog/*.md` / `*.mdx`       |
| Colours & fonts                        | `src/styles/global.css`                 |

## Writing a post

```bash
npm run new "My post title"
```

This creates `src/content/blog/my-post-title.md` as a draft. Drafts are visible in `npm run dev` and excluded from the production build — set `draft: false` to publish.

Frontmatter fields: `title`, `description`, `pubDate`, optional `updatedDate`, `tags`, `cover`, `coverAlt`, `draft`. See `src/content.config.ts`.

Every post gets reading time, a table of contents, tag pages (`/blog/tags/<tag>/`), and an entry in the RSS feed (`/rss.xml`).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch (GitHub Pages → *Deploy from a branch* → `gh-pages`).

To deploy by hand instead: `npm run deploy`.

## Structure

```text
src/
├── assets/          images processed by astro:assets
├── components/      Header, Footer, PostCard, Icon, SectionHeading
├── content/blog/    blog posts
├── data/site.ts     all home-page content
├── layouts/Base.astro
├── lib/utils.ts     url(), getPosts(), tags, reading time
├── pages/           index, blog/, blog/[...slug], blog/tags/[tag], rss.xml, 404
└── styles/global.css
```
