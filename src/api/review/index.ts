import { END_POINT } from '@/constants/api';
import {
  ReviewLikeReqType,
  ReviewLikeResType,
  ReviewListReqType,
  ReviewListResType,
} from '@/types/review';
import { fetcher } from '../fetcher';

export const postReviewList = async ({
  tags,
  pagingData,
}: ReviewListReqType) => {
  // Todo: 쿼리키에 필터 추가
  const { data } = await fetcher.post<ReviewListResType>(
    END_POINT.REVIEW.LIST,
    {
      tags,
      pagingData,
    }
  );

  return data;
};

export const patchReviewLike = async ({
  reviewId,
  isLike,
}: ReviewLikeReqType) => {
  const { data } = await fetcher.patch<ReviewLikeResType>(
    END_POINT.REVIEW.LIKE,
    { reviewId, isLike }
  );

  return data;
};
