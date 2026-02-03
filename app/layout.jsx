import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
  title: 'WellPlan - AI-Powered Omnichannel Messaging Platform',
  description: 'Scale your business with centralized messaging across 25+ channels. Automate conversations and boost sales by 300%.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
