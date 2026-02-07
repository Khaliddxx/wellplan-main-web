import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ['en', 'nl'];
const DEFAULT_LOCALE = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Skip public files, API routes, and Next.js internals
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with a locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If user is on a locale route, set cookie and continue
  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];
    const response = NextResponse.next();
    
    // Set cookie to remember locale preference (1 year)
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    });
    
    return response;
  }

  // For non-locale routes, check cookie and redirect
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const preferredLocale = cookieLocale && LOCALES.includes(cookieLocale) 
    ? cookieLocale 
    : DEFAULT_LOCALE;

  // If user has a non-default locale preference, redirect to locale version
  if (preferredLocale !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}${pathname}`;
    
    const response = NextResponse.redirect(url);
    return response;
  }

  // Default locale - no redirect needed, just continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
