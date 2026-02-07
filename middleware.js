import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ['en', 'nl'];
const DEFAULT_LOCALE = 'en';

// Countries that should default to Dutch
const DUTCH_COUNTRIES = ['NL', 'BE']; // Netherlands, Belgium (partial Dutch)

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

  // For non-locale routes, determine preferred locale
  // Priority: 1) Cookie, 2) Geo, 3) Default (en)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  let preferredLocale = DEFAULT_LOCALE;
  
  if (cookieLocale && LOCALES.includes(cookieLocale)) {
    // User has explicit preference from cookie
    preferredLocale = cookieLocale;
  } else {
    // No cookie - check geo
    const country = request.geo?.country || '';
    if (DUTCH_COUNTRIES.includes(country)) {
      preferredLocale = 'nl';
    }
  }

  // Only redirect if preferred locale is NOT the default
  // Default (en) stays on root paths without /en prefix
  if (preferredLocale !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}${pathname}`;
    
    const response = NextResponse.redirect(url);
    // Set cookie so subsequent requests don't need geo lookup
    response.cookies.set('NEXT_LOCALE', preferredLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  // Default locale (en) - no redirect, just continue
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
