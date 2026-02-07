import { NextResponse } from 'next/server';

const locales = ['en', 'nl'];
const defaultLocale = 'en';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Skip static files and api
  if (pathname.includes('.') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }
  
  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    // Has locale - continue (let Next.js handle [locale] route)
    return NextResponse.next();
  }
  
  // No locale - rewrite to default locale (don't redirect, keep URL clean)
  return NextResponse.rewrite(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
