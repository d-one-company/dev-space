import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = `${request.nextUrl.clone()}/api/auth/user`;

  const response = await fetch(url, {
    method: 'GET',
    headers: request.headers,
  });

  if (response.ok) {
    const data = await response.json();
    if (data.user) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  } else {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

export const config = {
  matcher: ['/'],
};
