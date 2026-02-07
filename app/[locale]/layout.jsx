import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ClientProviders from '../components/ClientProviders';

const locales = ['en', 'nl'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ClientProviders>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ClientProviders>
    </NextIntlClientProvider>
  );
}
