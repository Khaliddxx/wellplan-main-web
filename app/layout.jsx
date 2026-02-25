import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClientProviders from './components/ClientProviders';
import LocaleWrapper from './components/LocaleWrapper';

export const metadata = {
  metadataBase: new URL('https://wellplan.io'),
  title: 'WellPlan | AI-Powered Lead Generation Platform',
  description: 'Capture, nurture, and close more leads with AI-powered automation. 200+ integrations, 14-day free trial, no credit card required ➤ wellplan.io',
  alternates: {
    canonical: 'https://wellplan.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wellplan.io',
    siteName: 'WellPlan',
    images: [
      {
        url: 'https://wellplan.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WellPlan - AI-Powered Lead Generation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WellPlan | AI-Powered Lead Generation Platform',
    description: 'Capture, nurture, and close more leads with AI-powered automation. 200+ integrations, 14-day free trial ➤ wellplan.io',
    images: ['https://wellplan.io/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
