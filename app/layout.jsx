import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClientProviders from './components/ClientProviders';

export const metadata = {
  metadataBase: new URL('https://wellplan.io'),
  title: 'WellPlan | Capture. Nurture. Close.',
  description: 'The all-in-one platform for lead generation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a]">
        <ClientProviders>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
