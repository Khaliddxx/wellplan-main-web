import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

const locales = ['en', 'nl'];
const defaultLocale = 'en';

export default getRequestConfig(async () => {
  // Try to get locale from cookie first
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  
  if (localeCookie && locales.includes(localeCookie)) {
    return {
      locale: localeCookie,
      messages: (await import(`./messages/${localeCookie}.json`)).default
    };
  }
  
  // Try to detect from Accept-Language header
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Check for Dutch (Netherlands)
  if (acceptLanguage.toLowerCase().includes('nl')) {
    return {
      locale: 'nl',
      messages: (await import('./messages/nl.json')).default
    };
  }
  
  // Default to English
  return {
    locale: defaultLocale,
    messages: (await import(`./messages/${defaultLocale}.json`)).default
  };
});
