import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  const isAdminPath = pathname.startsWith('/admin') && !pathname.startsWith('/admin/login');
  const isProtectedApiRoute = 
    pathname.startsWith('/api/') && 
    !pathname.startsWith('/api/auth') && 
    request.method !== 'GET'; // Allow public GET requests for projects/certifications

  if (isAdminPath || isProtectedApiRoute) {
    const sessionCookie = request.cookies.get('admin_session');
    const session = sessionCookie ? await verifyToken(sessionCookie.value) : null;

    if (!session) {
      if (isAdminPath) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      } else {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
