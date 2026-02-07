import { NextIntlClientProvider } from 'next-intl';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ClientProviders from '../components/ClientProviders';

export default async function NlLayout({ children }) {
  const messages = (await import('../../messages/nl.json')).default;

  return (
    <NextIntlClientProvider locale="nl" messages={messages}>
      <ClientProviders>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ClientProviders>
    </NextIntlClientProvider>
  );
}
