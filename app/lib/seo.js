export const SITE_URL = 'https://wellplan.io';
export const SUPPORTED_LOCALES = ['en', 'nl'];
export const DEFAULT_LOCALE = 'en';

function normalizePath(path) {
  if (!path) return '/';
  if (!path.startsWith('/')) path = '/' + path;
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path;
}

function stripLocale(path) {
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return path;
}

export function buildLanguages(path) {
  const cleanPath = normalizePath(stripLocale(path));
  const pathPart = cleanPath === '/' ? '' : cleanPath;
  return {
    'en-US': `${SITE_URL}${pathPart === '' ? '' : pathPart}`,
    'nl-NL': `${SITE_URL}/nl${pathPart}`,
    'x-default': `${SITE_URL}${pathPart === '' ? '' : pathPart}`,
  };
}

export function canonicalFor(path) {
  const clean = normalizePath(path);
  return clean === '/' ? SITE_URL : `${SITE_URL}${clean}`;
}

/**
 * Build full page metadata with correct canonical, hreflang, and openGraph url.
 * Pass `path` as the actual page path (e.g. '/pricing', '/nl/pricing').
 */
export function buildMetadata({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noindex = false,
}) {
  const canonical = canonicalFor(path);
  const languages = buildLanguages(path);
  const isNl = path.startsWith('/nl');
  const locale = isNl ? 'nl_NL' : 'en_US';
  const alternateLocale = isNl ? 'en_US' : 'nl_NL';

  const meta = {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: ogType,
      url: canonical,
      title: ogTitle || title,
      description: ogDescription || description,
      siteName: 'WellPlan',
      locale,
      alternateLocale,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle || title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };

  if (noindex) {
    meta.robots = { index: false, follow: false };
  }

  return meta;
}

/**
 * JSON-LD: Organization
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WellPlan',
  url: SITE_URL,
  logo: `${SITE_URL}/wellplan-logo.png`,
  description:
    'WellPlan is an all-in-one lead capture, CRM, and marketing automation platform built for agencies, coaches, and SMBs.',
  sameAs: [
    'https://www.linkedin.com/company/wellplan',
    'https://twitter.com/wellplanio',
  ],
};

/**
 * JSON-LD: SoftwareApplication for the platform.
 * Note: aggregateRating intentionally omitted — only add once real review data exists.
 */
export const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WellPlan',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description:
    'All-in-one CRM and marketing automation platform with WhatsApp, Instagram, SMS, email, AI chatbots, voice agents, and 200+ integrations.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '97',
    highPrice: '497',
    offerCount: 3,
  },
  url: SITE_URL,
};

/**
 * Build a BreadcrumbList JSON-LD for a given path.
 * Example: '/features/ai-bot' → Home > Features > Conversation AI
 */
export function breadcrumbJsonLd(path, labels = {}) {
  const clean = normalizePath(stripLocale(path));
  if (clean === '/') return null;

  const segments = clean.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ];

  let currentPath = '';
  segments.forEach((seg, i) => {
    currentPath += '/' + seg;
    const name = labels[seg] || seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' ');
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name,
      item: `${SITE_URL}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
