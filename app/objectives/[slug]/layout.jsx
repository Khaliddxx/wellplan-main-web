import { siteData } from '@/app/lib/data';
import { buildMetadata } from '@/app/lib/seo';

export async function generateStaticParams() {
  return siteData.objectives.map((obj) => ({ slug: obj.slug }));
}

export async function generateMetadata({ params }) {
  const objective = siteData.objectives.find(o => o.slug === params.slug);
  if (!objective) {
    return buildMetadata({
      path: `/objectives/${params.slug}`,
      title: 'Objective Not Found',
      description: 'The objective you are looking for could not be found.',
      noindex: true,
    });
  }

  return buildMetadata({
    path: `/objectives/${objective.slug}`,
    title: `${objective.title} | WellPlan`,
    description: objective.description,
  });
}

export default function ObjectiveSlugLayout({ children }) {
  return children;
}
