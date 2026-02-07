import { integrations } from './lib/integrations';

export default function sitemap() {
  const baseUrl = 'https://wellplan.io';
  const locales = ['en', 'nl'];

  const staticRoutes = [
    { route: '', priority: 1, changeFreq: 'weekly' },
    { route: '/pricing', priority: 0.9, changeFreq: 'weekly' },
    { route: '/integrations', priority: 0.9, changeFreq: 'weekly' },
    { route: '/demo', priority: 0.9, changeFreq: 'monthly' },
    { route: '/blog', priority: 0.8, changeFreq: 'daily' },
    { route: '/roi-calculator', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/capturing', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/nurturing', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/closing', priority: 0.8, changeFreq: 'monthly' },
    { route: '/solutions/agencies', priority: 0.8, changeFreq: 'monthly' },
    { route: '/solutions/coaches', priority: 0.8, changeFreq: 'monthly' },
    { route: '/solutions/sales-teams', priority: 0.8, changeFreq: 'monthly' },
    { route: '/about', priority: 0.7, changeFreq: 'monthly' },
    { route: '/contact', priority: 0.7, changeFreq: 'monthly' },
    { route: '/privacy', priority: 0.3, changeFreq: 'yearly' },
    { route: '/terms', priority: 0.3, changeFreq: 'yearly' },
  ];

  // Generate pages for each locale
  const staticPages = staticRoutes.flatMap((page) =>
    locales.map((locale) => ({
      url: locale === 'en' ? `${baseUrl}${page.route}` : `${baseUrl}/${locale}${page.route}`,
      lastModified: new Date(),
      changeFrequency: page.changeFreq,
      priority: locale === 'en' ? page.priority : page.priority * 0.9,
    }))
  );

  // Integration pages for each locale
  const integrationPages = integrations.flatMap((integration) =>
    locales.map((locale) => ({
      url: locale === 'en' 
        ? `${baseUrl}/integrations/${integration.slug}`
        : `${baseUrl}/${locale}/integrations/${integration.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: locale === 'en' ? 0.6 : 0.5,
    }))
  );

  return [...staticPages, ...integrationPages];
}
