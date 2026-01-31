import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Force www redirect for non-www domains (permanent redirect)
  if (hostname === 'buildcalc.co') {
    const url = request.nextUrl.clone();
    url.host = 'www.buildcalc.co';
    return NextResponse.redirect(url, { status: 301 }); // Permanent redirect
  }
  
  // Force HTTPS if not on localhost
  if (
    !hostname.includes('localhost') &&
    !hostname.includes('127.0.0.1') &&
    request.headers.get('x-forwarded-proto') !== 'https'
  ) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url, { status: 301 });
  }
  
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
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
