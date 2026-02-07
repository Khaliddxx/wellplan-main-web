import { TranslationProvider } from '../lib/translations';
import messages from '../../messages/en.json';

export default function EnLayout({ children }) {
  return (
    <TranslationProvider locale="en" messages={messages}>
      {children}
    </TranslationProvider>
  );
}
