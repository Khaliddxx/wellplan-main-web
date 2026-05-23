import { industries } from '@/app/lib/industries';
import { buildMetadata } from '@/app/lib/seo';

export { default } from '../../../industries/[slug]/page';

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const industry = industries.find(i => i.slug === params.slug);
  if (!industry) {
    return buildMetadata({
      path: `/nl/industries/${params.slug}`,
      title: 'Industrie Niet Gevonden',
      description: 'De industrie kon niet worden gevonden.',
      noindex: true,
    });
  }

  return buildMetadata({
    path: `/nl/industries/${industry.slug}`,
    title: `${industry.name} CRM & Marketing Automatisering | WellPlan`,
    description: `${industry.description}. Zie hoe ${industry.name.toLowerCase()} WellPlan gebruiken om meer leads vast te leggen, te nurturen en af te sluiten.`,
  });
}
