import createMiddleware from 'next-intl/middleware';

export const locales = ['en', 'nl'];
export const defaultLocale = 'en';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
