import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  if (!accessToken && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/register', request.url));
  }
}
// 보안처리 페이지
export const config = {
  matcher: ['/write'],
};
