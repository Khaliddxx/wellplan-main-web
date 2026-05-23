import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClientProviders from './components/ClientProviders';
import LocaleWrapper from './components/LocaleWrapper';
import { organizationJsonLd, softwareApplicationJsonLd, SITE_URL } from './lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WellPlan | AI-Powered Lead Generation Platform',
    template: '%s',
  },
  description: 'Capture, nurture, and close more leads with AI-powered automation. 200+ integrations, 14-day free trial, no credit card required ➤ wellplan.io',
  applicationName: 'WellPlan',
  authors: [{ name: 'WellPlan' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'WellPlan',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WellPlan - AI-Powered Lead Generation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a]">
        <ClientProviders>
          <LocaleWrapper>
            <Navigation />
            <main className="pt-20 sm:pt-24">{children}</main>
            <Footer />
          </LocaleWrapper>
        </ClientProviders>
      </body>
    </html>
  );
}
