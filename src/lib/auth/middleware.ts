import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/platform/admin')) {
    const authToken = request.cookies.get('auth-token');
    
    if (!authToken) {
      const loginUrl = new URL('/platform', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}