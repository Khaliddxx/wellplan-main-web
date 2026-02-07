import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'nl'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // Only /nl prefix, no /en
  localeDetection: false // NO auto-detection from browser
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
