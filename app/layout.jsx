import './globals.css';

export const metadata = {
  metadataBase: new URL('https://wellplan.io'),
  title: {
    default: 'WellPlan | Capture. Nurture. Close. — All-in-One Lead Generation Platform',
    template: '%s | WellPlan'
  },
  description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans. Capture leads, nurture relationships, and close deals faster with WellPlan.',
  keywords: ['lead generation', 'CRM', 'marketing automation', 'sales funnel', 'WhatsApp marketing', 'email automation', 'landing pages', 'lead capture', 'GoHighLevel'],
  authors: [{ name: 'WellPlan', url: 'https://wellplan.io' }],
  creator: 'WellPlan',
  publisher: 'KLABS Ventures LLC',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wellplan.io',
    siteName: 'WellPlan',
    title: 'WellPlan | Capture. Nurture. Close.',
    description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WellPlan - Capture. Nurture. Close.' }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'WellPlan | Capture. Nurture. Close.',
    description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
    images: ['/og-image.png'],
    creator: '@wellplan',
  },
  
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  
  manifest: '/manifest.json',
  
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WellPlan',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'All-in-one lead generation and CRM platform to capture leads, nurture relationships, and close deals.',
  url: 'https://wellplan.io',
  logo: 'https://wellplan.io/icon.png',
  offers: { '@type': 'Offer', price: '97', priceCurrency: 'USD', priceValidUntil: '2027-12-31' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '500' },
  publisher: { '@type': 'Organization', name: 'KLABS Ventures LLC', url: 'https://wellplan.io' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
