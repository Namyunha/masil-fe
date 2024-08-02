import { http, HttpResponse } from 'msw';
import {
  DEFAULT_CURSOR,
  DEFAULT_SIZE,
  END_POINT,
  ERROR_CODE,
  SUCCESS_CODE,
} from '@/constants/api';
import { CafeLikeReqType, CafeListReqType } from '@/types/cafe';
import {
  ReviewCommentDeleteReqType,
  ReviewCommentReqType,
  ReviewCommentUpdateReqType,
  ReviewCommentWriteReqType,
  ReviewLikeReqType,
  ReviewListReqType,
} from '@/types/review';
import { mockCafeList } from './data/cafeList';
import { mockRecommendCafeList } from './data/recommendCafeList';
import { mockReviewCommentList } from './data/reviewCommentList';
import { mockReviewList } from './data/reviewList';

export const browserHandlers = [
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

  http.get(END_POINT.USER.USERINFO, async ({ request }) => {
    console.log('user-info request = ', request);

    return HttpResponse.json({
      status: SUCCESS_CODE.OK,
      message: '유저 정보 조회 성공',
      data: {
        email: 'ajs998@naver.com',
        pw: 'qwer1234!',
        profileImg: '/user1',
        nickName: 'yunha',
      },
    });
  }),

  // Memo: 리뷰 좋아요 상태 변경
  http.patch<never, ReviewLikeReqType>(
    END_POINT.REVIEW.LIKE,
    async ({ request }) => {
      const { isLike } = await request.json();

      return HttpResponse.json(
        {
          status: SUCCESS_CODE.OK,
          message: '좋아요 상태 변경 성공',
          data: { isLike },
        },
        {
          status: SUCCESS_CODE.OK,
        }
      );
    }
  ),

  // Memo: 리뷰 댓글 리스트 조회
  http.get<ReviewCommentReqType>(
    END_POINT.REVIEW.COMMENT(':reviewId'),
    async () => {
      return HttpResponse.json(mockReviewCommentList, {
        status: SUCCESS_CODE.OK,
      });
    }
  ),

  // Memo: 카페 좋아요 상태 변경
  http.patch<never, CafeLikeReqType>(
    END_POINT.CAFE.LIKE,
    async ({ request }) => {
      const { isLike } = await request.json();

      return HttpResponse.json(
        {
          status: SUCCESS_CODE.OK,
          message: '좋아요 상태 변경 성공',
          data: { isLike },
        },
        {
          status: SUCCESS_CODE.OK,
        }
      );
    }
  ),

  http.post<never, CafeListReqType>(
    END_POINT.CAFE.LIST,
    async ({ request }) => {
      const { pagingData } = await request.json();
      const { lastPostId, pageSize } = pagingData;
      const cursor = lastPostId ?? DEFAULT_CURSOR;
      const size = pageSize ?? DEFAULT_SIZE;
      const nextList = mockCafeList.slice(cursor, cursor + size);

      const response = {
        status: SUCCESS_CODE.OK,
        message: '전체 카페 리스트 조회 성공',
        data: {
          cafeInfos: nextList,
          meta: {
            hasNext: nextList.length <= DEFAULT_SIZE,
          },
        },
      };

      return HttpResponse.json(response, { status: SUCCESS_CODE.OK });
    }
  ),

  http.post<never, ReviewCommentWriteReqType>(
    END_POINT.REVIEW.COMMENT_WRITE,
    async ({ request }) => {
      const { reviewId } = await request.json();

      return HttpResponse.json(
        {
          status: SUCCESS_CODE.OK,
          message: '리뷰 댓글 작성 성공',
          data: { reviewId },
        },
        {
          status: SUCCESS_CODE.OK,
        }
      );
    }
  ),

  http.patch<never, ReviewCommentUpdateReqType>(
    END_POINT.REVIEW.COMMENT_UPDATE,
    async ({ request }) => {
      const { reviewId } = await request.json();

      return HttpResponse.json(
        {
          status: SUCCESS_CODE.OK,
          message: '리뷰 댓글 수정 성공',
          data: { reviewId },
        },
        {
          status: SUCCESS_CODE.OK,
        }
      );
    }
  ),

  http.delete<never, ReviewCommentDeleteReqType>(
    END_POINT.REVIEW.COMMENT_DELETE,
    async ({ request }) => {
      const { reviewId } = await request.json();

      if (reviewId === '1') {
        return HttpResponse.json(
          {
            status: ERROR_CODE.BAD_REQUEST,
            message: '리뷰 댓글 삭제 실패',
          },
          {
            status: ERROR_CODE.BAD_REQUEST,
          }
        );
      }

      return HttpResponse.json(
        {
          status: SUCCESS_CODE.OK,
          message: '리뷰 댓글 삭제 성공',
          data: { reviewId },
        },
        {
          status: SUCCESS_CODE.OK,
        }
      );
    }
  ),
];
