import { NextIntlClientProvider } from 'next-intl';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ClientProviders from '../components/ClientProviders';

export default async function EnLayout({ children }) {
  const messages = (await import('../../messages/en.json')).default;

  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      <ClientProviders>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ClientProviders>
    </NextIntlClientProvider>
  );
}
