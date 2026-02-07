import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from cookie, default to English
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  const locale = localeCookie && ['en', 'nl'].includes(localeCookie) ? localeCookie : 'en';
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
