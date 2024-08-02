import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  if (accessToken) {
    // accessToken이 존재하는데 로그인 페이지로 접근하려는 경우
    if (request.nextUrl.pathname.startsWith('/login')) {
      return Response.redirect(new URL('/', request.url));
    }
  } else {
    // accessToken이 없고 로그인 페이지가 아닌 다른 페이지로 접근하려는 경우

    if (!request.nextUrl.pathname.startsWith('/login')) {
      return Response.redirect(new URL('/protect', request.url));
    }
  }
}

// 보안처리 페이지
export const config = {
  matcher: ['/review/write', '/login', '/mypage', '/my-setting'],
};
