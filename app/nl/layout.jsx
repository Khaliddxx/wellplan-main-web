import { TranslationProvider } from '../lib/translations';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ClientProviders from '../components/ClientProviders';
import messages from '../../messages/nl.json';

export default function NlLayout({ children }) {
  return (
    <TranslationProvider locale="nl" messages={messages}>
      <ClientProviders>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ClientProviders>
    </TranslationProvider>
  );
}
