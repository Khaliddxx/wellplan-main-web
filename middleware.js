import { NextResponse } from 'next/server';

export function middleware(request) {
  // Rewrite root to /en
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/en', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/']
};
