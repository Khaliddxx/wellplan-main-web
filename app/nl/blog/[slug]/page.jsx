import { buildMetadata } from '@/app/lib/seo';
import { blogPosts } from '../../../blog/[slug]/page';

export { default, generateStaticParams } from '../../../blog/[slug]/page';

export async function generateMetadata({ params }) {
  const post = blogPosts?.[params.slug];
  if (!post) {
    return buildMetadata({
      path: `/nl/blog/${params.slug}`,
      title: 'Post Niet Gevonden',
      description: 'De blogpost kon niet worden gevonden.',
      noindex: true,
    });
  }

  const meta = buildMetadata({
    path: `/nl/blog/${params.slug}`,
    title: `${post.title} | WellPlan Blog`,
    description: post.excerpt,
    ogTitle: post.title,
    ogType: 'article',
  });
  meta.openGraph = { ...meta.openGraph, publishedTime: post.date };
  return meta;
}
