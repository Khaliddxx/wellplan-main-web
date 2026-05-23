import { integrations } from '@/app/lib/integrations';
import { notFound } from 'next/navigation';
import IntegrationDetailClient from '@/app/integrations/[slug]/IntegrationDetailClient';
import { buildMetadata } from '@/app/lib/seo';

export async function generateMetadata({ params }) {
  const integration = integrations.find(i => i.slug === params.slug);

  if (!integration) {
    return buildMetadata({
      path: `/nl/integrations/${params.slug}`,
      title: 'Integratie Niet Gevonden',
      description: 'De integratie kon niet worden gevonden.',
      noindex: true,
    });
  }

  return buildMetadata({
    path: `/nl/integrations/${integration.slug}`,
    title: `${integration.name} CRM Integratie — Verbind met WellPlan`,
    description: `Verbind ${integration.name} met WellPlan. ${integration.description}. Automatiseer workflows, synchroniseer data, en vang leads uit ${integration.name} in één gecentraliseerd CRM.`,
  });
}

export default function IntegrationDetailPage({ params }) {
  const integration = integrations.find(i => i.slug === params.slug);

  if (!integration) {
    notFound();
  }

  const relatedIntegrations = integrations
    .filter(i => i.category === integration.category && i.slug !== integration.slug)
    .slice(0, 3);

  return (
    <IntegrationDetailClient
      integration={integration}
      relatedIntegrations={relatedIntegrations}
    />
  );
}

export async function generateStaticParams() {
  return integrations.map((integration) => ({
    slug: integration.slug,
  }));
}
