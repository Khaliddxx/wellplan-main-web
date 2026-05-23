import { industries } from '@/app/lib/industries';
import { buildMetadata } from '@/app/lib/seo';

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const industry = industries.find(i => i.slug === params.slug);
  if (!industry) {
    return buildMetadata({
      path: `/industries/${params.slug}`,
      title: 'Industry Not Found',
      description: 'The industry you are looking for could not be found.',
      noindex: true,
    });
  }

  return buildMetadata({
    path: `/industries/${industry.slug}`,
    title: `${industry.name} CRM & Marketing Automation | WellPlan`,
    description: `${industry.description}. See how ${industry.name.toLowerCase()} use WellPlan to capture, nurture, and close more leads.`,
  });
}

export default function IndustrySlugLayout({ children }) {
  return children;
}
