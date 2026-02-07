import { integrations } from './lib/integrations';

export default function sitemap() {
  const baseUrl = 'https://wellplan.io';
  const locales = ['en', 'nl'];

  // Root homepage
  const rootHomepage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  };

  // Localized homepages with alternates
  const localizedHomepages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        nl: `${baseUrl}/nl`,
      },
    },
  }));

  // Static pages - will generate both root and localized versions
  const staticPageRoutes = [
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
    { route: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { route: '/privacy', priority: 0.3, changeFreq: 'yearly' },
    { route: '/terms', priority: 0.3, changeFreq: 'yearly' },
  ];

  // Generate root static pages
  const rootStaticPages = staticPageRoutes.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));

  // Generate localized static pages with alternates
  const localizedStaticPages = staticPageRoutes.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.route}`,
      lastModified: new Date(),
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page.route}`,
          nl: `${baseUrl}/nl${page.route}`,
        },
      },
    }))
  );

  // Integration pages (root only - these aren't translated)
  const integrationPages = integrations.map((integration) => ({
    url: `${baseUrl}/integrations/${integration.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    rootHomepage,
    ...localizedHomepages,
    ...rootStaticPages,
    ...localizedStaticPages,
    ...integrationPages,
  ];
}
