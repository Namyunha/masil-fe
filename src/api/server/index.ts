import { END_POINT } from '@/constants/api';
import { CafeDetailResType } from '@/types/cafe';
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

export const getCafeDetail = async (cafeId: string) => {
  try {
    const data = await serverFetcher<CafeDetailResType>({
      endPoint: END_POINT.CAFE.DETAIL(cafeId),
      errorMessage: '카페 상세 조회에 실패했습니다.',
    });

    return { data };
  } catch (error) {
    return { error: (error as Error).message };
  }
};
