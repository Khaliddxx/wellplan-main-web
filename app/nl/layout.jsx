import { TranslationProvider } from '../lib/translations';
import messages from '../../messages/nl.json';

export default function NlLayout({ children }) {
  return (
    <TranslationProvider locale="nl" messages={messages}>
      {children}
    </TranslationProvider>
  );
}
