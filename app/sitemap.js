import { integrations } from './lib/integrations';

export default function sitemap() {
  const baseUrl = 'https://wellplan-main-web.vercel.app';

  // Static pages
  const staticPages = [
    '',
    '/pricing',
    '/integrations',
    '/features',
    '/case-studies',
    '/industries',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Integration pages
  const integrationPages = integrations.map((integration) => ({
    url: `${baseUrl}/integrations/${integration.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...integrationPages];
}
