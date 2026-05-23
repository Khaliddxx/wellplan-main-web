import { integrations } from '@/app/lib/integrations';
import { notFound } from 'next/navigation';
import IntegrationDetailClient from './IntegrationDetailClient';
import { buildMetadata } from '@/app/lib/seo';

export async function generateMetadata({ params }) {
  const integration = integrations.find(i => i.slug === params.slug);

  if (!integration) {
    return buildMetadata({
      path: `/integrations/${params.slug}`,
      title: 'Integration Not Found',
      description: 'The integration you are looking for could not be found.',
      noindex: true,
    });
  }

  return buildMetadata({
    path: `/integrations/${integration.slug}`,
    title: `${integration.name} CRM Integration — Connect with WellPlan`,
    description: `Connect ${integration.name} with WellPlan. ${integration.description}. Automate workflows, sync data, and capture leads from ${integration.name} into one unified CRM.`,
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
