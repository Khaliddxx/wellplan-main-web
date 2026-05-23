import { caseStudies } from '@/app/lib/caseStudies';
import { buildMetadata } from '@/app/lib/seo';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) {
    return buildMetadata({
      path: `/case-studies/${params.slug}`,
      title: 'Case Study Not Found',
      description: 'The case study you are looking for could not be found.',
      noindex: true,
    });
  }

  return buildMetadata({
    path: `/case-studies/${study.slug}`,
    title: `${study.company} Case Study — ${study.metric} | WellPlan`,
    description: `${study.company} (${study.industry}): ${study.challenge} See how they achieved ${study.metric} with WellPlan.`,
  });
}

export default function CaseStudySlugLayout({ children }) {
  return children;
}
