import { NextResponse } from 'next/server';

const locales = ['en', 'nl'];
const defaultLocale = 'en';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    // Already has locale, continue
    return NextResponse.next();
  }
  
  // Redirect to default locale
  const locale = defaultLocale;
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
