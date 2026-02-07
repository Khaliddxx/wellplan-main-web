import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'nl'],
  defaultLocale: 'en',
  localePrefix: 'always', // Force prefix for both locales for testing
  localeDetection: false // NO auto-detection from browser
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
