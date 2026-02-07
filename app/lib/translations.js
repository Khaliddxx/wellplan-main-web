'use client';

import { createContext, useContext } from 'react';

const TranslationContext = createContext(null);

export function TranslationProvider({ locale, messages, children }) {
  return (
    <TranslationContext.Provider value={{ locale, messages }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations(namespace) {
  const context = useContext(TranslationContext);
  
  // If no context, return a function that returns the key (fallback)
  if (!context) {
    return (key) => key;
  }
  
  const { messages } = context;
  
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
  const context = useContext(TranslationContext);
  return context?.locale || 'en';
}

// Helper to check if we're in a translation context
export function useHasTranslations() {
  const context = useContext(TranslationContext);
  return context !== null;
}
