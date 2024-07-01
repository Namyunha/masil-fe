import { http, HttpResponse } from 'msw';
import {
  DEFAULT_CURSOR,
  DEFAULT_SIZE,
  END_POINT,
  ERROR_CODE,
  SUCCESS_CODE,
} from '@/constants/api';
import { ReviewLikeReqType, ReviewListReqType } from '@/types/review';
import { mockRecommendCafeList } from './data/recommendCafeList';
import { mockReviewList } from './data/reviewList';

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

  // Memo: 리뷰 리스트 조회
  http.post<never, ReviewListReqType>(
    END_POINT.REVIEW.LIST,
    async ({ request }) => {
      const { pagingData } = await request.json();
      const { lastPostId, pageSize } = pagingData;
      const cursor = lastPostId ?? DEFAULT_CURSOR;
      const size = pageSize ?? DEFAULT_SIZE;
      const nextList = mockReviewList.slice(cursor, cursor + size);

      const response = {
        status: SUCCESS_CODE.OK,
        message: '전체 리뷰 리스트 조회 성공',
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

  // Memo: 추천 카페 리스트 조회
  http.get(END_POINT.CAFE.RECOMMEND, async () => {
    return HttpResponse.json(mockRecommendCafeList, {
      status: SUCCESS_CODE.OK,
    });
  }),

  // Memo: 좋아요 상태 변경
  http.patch<never, ReviewLikeReqType>(
    END_POINT.REVIEW.LIKE,
    async ({ request }) => {
      const { isLike } = await request.json();

      return HttpResponse.json(
        {
          status: SUCCESS_CODE.OK,
          message: '좋아요 상태 변경 성공',
          data: { isLike: !isLike },
        },
        {
          status: SUCCESS_CODE.OK,
        }
      );
    }
  ),
];
