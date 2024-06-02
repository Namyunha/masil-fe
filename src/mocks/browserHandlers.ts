import { http, HttpResponse } from 'msw';
import {
  DEFAULT_CURSOR,
  DEFAULT_SIZE,
  END_POINT,
  ERROR_CODE,
  SUCCESS_CODE,
} from '@/constants/api';
import { mockReviewList } from './data';

export const browserHandlers = [
  // 회원가입
  http.post<never, { nickName: string; email: string; password: string }>(
    END_POINT.USER.SIGNUP,
    async ({ request }) => {
      const { email } = await request.json();

      if (email === 'error@gmail.com') {
        return HttpResponse.json(
          {
            status: ERROR_CODE.BAD_REQUEST,
            message: '회원가입에 실패했습니다',
          },
          { status: ERROR_CODE.BAD_REQUEST }
        );
      }

      return HttpResponse.json(null, { status: SUCCESS_CODE.CREATED });
    }
  ),

  // 리뷰 리스트 조회
  http.get(END_POINT.REVIEW.LIST, async ({ request }) => {
    const url = new URL(request.url);
    const cursor =
      parseInt(url.searchParams.get('cursor') as string) || DEFAULT_CURSOR;
    const size =
      parseInt(url.searchParams.get('size') as string) || DEFAULT_SIZE;

    const response = {
      ...mockReviewList,
      data: {
        reviews: mockReviewList.data.reviews.slice(cursor, cursor + size),
      },
      hasNext: true,
    };

    return HttpResponse.json(response, { status: SUCCESS_CODE.OK });
  }),
];
