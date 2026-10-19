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

  // Locale-prefixed routes render as-is. Don't persist a preference here:
  // merely landing on a /nl page (e.g. from search) is not a language choice,
  // and a sticky 'nl' cookie would redirect every English URL back to /nl.
  // The preference cookie is only written by the LanguageSwitcher.
  if (pathnameHasLocale) {
    return NextResponse.next();
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
    
    // Don't set a cookie here: a geo guess must not harden into a
    // preference that outlives an explicit choice.
    return NextResponse.redirect(url);
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
