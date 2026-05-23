import { integrations } from './lib/integrations';

export default function sitemap() {
  const baseUrl = 'https://wellplan.io';

  // Root EN homepage (default locale)
  const rootHomepage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: {
        en: baseUrl,
        nl: `${baseUrl}/nl`,
      },
    },
  };

  // NL homepage with alternates
  const nlHomepage = {
    url: `${baseUrl}/nl`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
    alternates: {
      languages: {
        en: baseUrl,
        nl: `${baseUrl}/nl`,
      },
    },
  };

  // All static pages with NL alternates
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

    // Comparison pages
    { route: '/compare', priority: 0.8, changeFreq: 'monthly' },
    { route: '/compare/wellplan-vs-hubspot', priority: 0.9, changeFreq: 'monthly' },
    { route: '/compare/wellplan-vs-gohighlevel', priority: 0.9, changeFreq: 'monthly' },
    { route: '/compare/wellplan-vs-activecampaign', priority: 0.9, changeFreq: 'monthly' },

    // Legal
    { route: '/privacy', priority: 0.3, changeFreq: 'yearly' },
    { route: '/terms', priority: 0.3, changeFreq: 'yearly' },
  ];

  const buildPagePair = ({ route, priority, changeFreq }) => [
    {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          nl: `${baseUrl}/nl${route}`,
        },
      },
    },
    {
      url: `${baseUrl}/nl${route}`,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority: priority * 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          nl: `${baseUrl}/nl${route}`,
        },
      },
    },
  ];

  const staticPages = staticPageRoutes.flatMap(buildPagePair);

  // Integration detail pages
  const integrationPages = integrations.flatMap((integration) =>
    buildPagePair({ route: `/integrations/${integration.slug}`, priority: 0.6, changeFreq: 'monthly' }),
  );

  return [
    rootHomepage,
    nlHomepage,
    ...staticPages,
    ...integrationPages,
  ];
}
