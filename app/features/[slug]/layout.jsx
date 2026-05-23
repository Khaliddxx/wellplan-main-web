import { features } from '@/app/lib/features';
import { buildMetadata } from '@/app/lib/seo';

export async function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const feature = features.find(f => f.slug === params.slug);
  if (!feature) {
    return buildMetadata({
      path: `/features/${params.slug}`,
      title: 'Feature Not Found',
      description: 'The feature you are looking for could not be found.',
      noindex: true,
    });
  }

  return buildMetadata({
    path: `/features/${feature.slug}`,
    title: `${feature.name} | WellPlan`,
    description: feature.description,
  });
}

export default function FeatureSlugLayout({ children }) {
  return children;
}
