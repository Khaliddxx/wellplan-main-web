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

  // All static pages with localized versions
  const staticPageRoutes = [
    // Main pages
    { route: '/pricing', priority: 0.9, changeFreq: 'weekly' },
    { route: '/demo', priority: 0.9, changeFreq: 'monthly' },
    { route: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { route: '/about', priority: 0.7, changeFreq: 'monthly' },
    
    // Features - Main pillars
    { route: '/features', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/capturing', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/nurturing', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/closing', priority: 0.8, changeFreq: 'monthly' },
    
    // AI Suite (7 pages)
    { route: '/features/ai', priority: 0.85, changeFreq: 'weekly' },
    { route: '/features/ai-bot', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/ai-voice', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/ai-reviews', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/ai-content', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/ai-funnel', priority: 0.8, changeFreq: 'monthly' },
    { route: '/features/ai-workflow', priority: 0.8, changeFreq: 'monthly' },
    
    // Solutions
    { route: '/solutions/agencies', priority: 0.8, changeFreq: 'monthly' },
    { route: '/solutions/coaches', priority: 0.8, changeFreq: 'monthly' },
    { route: '/solutions/sales-teams', priority: 0.8, changeFreq: 'monthly' },
    
    // Partners
    { route: '/partners', priority: 0.7, changeFreq: 'monthly' },
    { route: '/partners/pseo', priority: 0.7, changeFreq: 'monthly' },
    
    // Resources
    { route: '/integrations', priority: 0.9, changeFreq: 'weekly' },
    { route: '/blog', priority: 0.8, changeFreq: 'daily' },
    { route: '/roi-calculator', priority: 0.8, changeFreq: 'monthly' },
    { route: '/case-studies', priority: 0.7, changeFreq: 'monthly' },
    { route: '/industries', priority: 0.7, changeFreq: 'monthly' },
    
    // Legal
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

  // Integration detail pages (with locale alternates)
  const integrationPages = integrations.flatMap((integration) => {
    const route = `/integrations/${integration.slug}`;
    return [
      // Root
      {
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      // Localized with alternates
      ...locales.map((locale) => ({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            nl: `${baseUrl}/nl${route}`,
          },
        },
      })),
    ];
  });

  return [
    rootHomepage,
    ...localizedHomepages,
    ...rootStaticPages,
    ...localizedStaticPages,
    ...integrationPages,
  ];
}
