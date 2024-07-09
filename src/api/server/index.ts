import { END_POINT } from '@/constants/api';
import { ReviewDetailResType } from '@/types/review';
import { serverFetcher } from '../serverFetcher';

export const getReviewDetail = async (reviewId: string) => {
  try {
    const data = await serverFetcher<ReviewDetailResType>({
      endPoint: END_POINT.REVIEW.DETAIL(reviewId),
      errorMessage: '리뷰 상세 조회에 실패했습니다.',
    });

    return { data };
  } catch (error) {
    return { error: (error as Error).message };
  }
};
