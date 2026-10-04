---
title: How this blog works
description: A quick tour of writing posts here — frontmatter, code blocks, tables, drafts and tags. Replace this post with your first real one.
pubDate: 2026-10-04
tags: [meta, astro]
---

This blog is a folder of Markdown files. Every `.md` or `.mdx` file in `src/content/blog/` becomes a post at `/blog/<file-name>/`, gets listed on the blog page, and lands in the RSS feed.

## Creating a post

The quickest way is the scaffold script, which fills in the frontmatter for you:

```bash
npm run new "Designing idempotent APIs in NestJS"
```

That creates `src/content/blog/designing-idempotent-apis-in-nestjs.md` as a **draft**. Drafts show up while you run `npm run dev` (with a small *draft* badge), but they're left out of the production build until you set `draft: false`.

## Frontmatter

Each post starts with a small YAML block. The schema is checked at build time, so a typo fails loudly instead of quietly breaking the page.

| Field         | Required | Notes                                          |
| ------------- | -------- | ---------------------------------------------- |
| `title`       | yes      | Shown on the page and in link previews         |
| `description` | yes      | One or two sentences; used in lists and SEO    |
| `pubDate`     | yes      | `2026-10-04` style                             |
| `updatedDate` | no       | Adds an "Updated" note under the title         |
| `tags`        | no       | `[nestjs, postgres]` — each tag gets its own page |
| `cover`       | no       | Relative path to an image next to the post     |
| `draft`       | no       | `true` keeps it out of production              |

## Code

Fenced code blocks are highlighted at build time, with a light and a dark theme that follow the site toggle:

```ts
@Injectable()
export class OrderService {
  constructor(
    private readonly orders: OrderRepository,
    private readonly events: EventBus,
  ) {}

  async place(cmd: PlaceOrder): Promise<OrderId> {
    const order = Order.create(cmd);
    await this.orders.save(order);
    this.events.publishAll(order.pullEvents());
    return order.id;
  }
}
```

Inline code like `SELECT ... FOR UPDATE` works too.

## Writing in Vietnamese

Fonts include the full Vietnamese character set, so you can write posts in either language — *Tiếng Việt hiển thị đầy đủ dấu.*

> Tip: the table of contents on the right is built from your `##` and `###` headings, so keep them short.

## Images

Put images next to the post (for example `src/content/blog/my-post/diagram.png`) and reference them relatively — `![Architecture](./diagram.png)`. They're resized and converted to modern formats automatically.

That's it. Delete this post once you've published your first real one.
