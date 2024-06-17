import { http, HttpResponse } from 'msw';
import {
  DEFAULT_CURSOR,
  DEFAULT_SIZE,
  END_POINT,
  ERROR_CODE,
  SUCCESS_CODE,
} from '@/constants/api';
import { ReviewListReqType } from '@/types/review';
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
  http.post<never, ReviewListReqType>(
    END_POINT.REVIEW.LIST,
    async ({ request }) => {
      const { pagingData } = await request.json();
      const { lastPostId, pageSize } = pagingData;
      const cursor = lastPostId ?? DEFAULT_CURSOR;
      const size = pageSize ?? DEFAULT_SIZE;
      const nextList = mockReviewList.data.reviews.slice(cursor, cursor + size);

      const response = {
        ...mockReviewList,
        data: {
          reviews: nextList,
          meta: {
            hasNext: nextList.length <= DEFAULT_SIZE,
          },
        },
      };

      return HttpResponse.json(response, { status: SUCCESS_CODE.OK });
    }
  ),
];
