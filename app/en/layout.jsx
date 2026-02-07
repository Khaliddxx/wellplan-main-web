import { TranslationProvider } from '../lib/translations';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ClientProviders from '../components/ClientProviders';
import messages from '../../messages/en.json';

export default function EnLayout({ children }) {
  return (
    <TranslationProvider locale="en" messages={messages}>
      <ClientProviders>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ClientProviders>
    </TranslationProvider>
  );
}
