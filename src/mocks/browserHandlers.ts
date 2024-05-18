import { http, HttpResponse } from 'msw';
import { END_POINT } from '@/constants/api';

export const browserHandlers = [
  // 회원가입
  http.post<never, { nickName: string; email: string; password: string }>(
    END_POINT.AUTH.SIGNUP,
    async ({ request }) => {
      const { email } = await request.json();

      if (email === 'error@gmail.com') {
        return HttpResponse.json(null, { status: 400 });
      }

      return HttpResponse.json(null, { status: 201 });
    }
  ),

  // 로그인
  http.post<never, { email: string; password: string }>(
    END_POINT.AUTH.SIGNIN,
    async ({ request }) => {
      const { email, password } = await request.json();

      if (email === 'masil@gmail.com' && password === 'masil123') {
        return HttpResponse.json(null, { status: 200 });
      }

      return HttpResponse.json(null, { status: 400 });
    }
  ),
];
