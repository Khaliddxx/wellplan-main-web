'use client';

import { createContext, useContext } from 'react';

const TranslationContext = createContext({ locale: 'en', messages: {} });

export function TranslationProvider({ locale, messages, children }) {
  return (
    <TranslationContext.Provider value={{ locale, messages }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations(namespace) {
  const { messages } = useContext(TranslationContext);
  
  // Get the namespace object from messages
  const namespaceMessages = namespace ? messages[namespace] || {} : messages;
  
  // Return a function that gets translations by key
  return (key) => {
    const keys = key.split('.');
    let value = namespaceMessages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function useLocale() {
  const { locale } = useContext(TranslationContext);
  return locale;
}
