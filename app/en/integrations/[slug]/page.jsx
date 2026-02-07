import { integrations } from '@/app/lib/integrations';
import { notFound } from 'next/navigation';
import IntegrationDetailClient from '@/app/integrations/[slug]/IntegrationDetailClient';

export async function generateMetadata({ params }) {
  const integration = integrations.find(i => i.slug === params.slug);
  
  if (!integration) {
    return { title: 'Integration Not Found' };
  }

  return {
    title: `${integration.name} Integration`,
    description: `Connect ${integration.name} with WellPlan. ${integration.description}. Automate workflows and sync data seamlessly.`,
  };
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
