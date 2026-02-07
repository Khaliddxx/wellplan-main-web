import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClientProviders from './components/ClientProviders';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

// Force dynamic rendering to read cookies on each request
export const dynamic = 'force-dynamic';

export const metadata = {
  metadataBase: new URL('https://wellplan.io'),
  title: {
    default: 'WellPlan | Capture. Nurture. Close. — All-in-One Lead Generation Platform',
    template: '%s | WellPlan'
  },
  description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
  keywords: ['lead generation', 'CRM', 'marketing automation', 'sales funnel', 'WhatsApp marketing'],
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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WellPlan' }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'WellPlan | Capture. Nurture. Close.',
    description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
    images: ['/og-image.png'],
  },
  
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  
  manifest: '/manifest.json',
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WellPlan',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://wellplan.io',
  offers: { '@type': 'Offer', price: '97', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'KLABS Ventures LLC' },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#0a0a0a]">
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
