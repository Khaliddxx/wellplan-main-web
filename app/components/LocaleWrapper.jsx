'use client';

import { usePathname } from 'next/navigation';
import { TranslationProvider } from '../lib/translations';
import enMessages from '../../messages/en.json';
import nlMessages from '../../messages/nl.json';

const messages = {
  en: enMessages,
  nl: nlMessages,
};

export default function LocaleWrapper({ children }) {
  const pathname = usePathname();
  
  // Detect locale from pathname
  let locale = 'en'; // default
  if (pathname?.startsWith('/nl')) {
    locale = 'nl';
  } else if (pathname?.startsWith('/en')) {
    locale = 'en';
  }
  
  return (
    <TranslationProvider locale={locale} messages={messages[locale]}>
      {children}
    </TranslationProvider>
  );
}
