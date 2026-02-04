import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { integrations } from '@/src/data/integrationsData'
import { IntegrationDetailContent } from './content'

export async function generateStaticParams() {
  return integrations.map((integration) => ({
    slug: integration.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const integration = integrations.find((i) => i.slug === params.slug)
  
  if (!integration) {
    return {
      title: 'Integration Not Found',
    }
  }

  return {
    title: `${integration.name} Integration - WellPlan`,
    description: integration.description,
  }
}

export default function IntegrationPage({ params }: { params: { slug: string } }) {
  const integration = integrations.find((i) => i.slug === params.slug)

  if (!integration) {
    notFound()
  }

  return <IntegrationDetailContent integration={integration} />
}
