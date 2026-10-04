import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '@/data/site';
import { getPosts, url } from '@/lib/utils';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${profile.name} — Blog`,
    description: 'Notes on backend engineering, system design and things I am learning.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: url(`blog/${post.id}/`),
    })),
  });
}
