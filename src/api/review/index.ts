import { END_POINT } from '@/constants/api';
import {
  ReviewCommentReqType,
  ReviewCommentResType,
  ReviewLikeReqType,
  ReviewLikeResType,
  ReviewListReqType,
  ReviewListResType,
} from '@/types/review';
import { fetcher } from '../fetcher';

export const postReviewList = async ({
  tags,
  sorting,
  location,
  pagingData,
}: ReviewListReqType) => {
  // Todo: 쿼리키에 필터 추가
  const { data } = await fetcher.post<ReviewListResType>(
    END_POINT.REVIEW.LIST,
    {
      tags,
      sorting,
      location,
      pagingData,
    }
  );

  return data;
};

export const postMyReviewList = async ({
  pagingData,
  userId,
}: Pick<ReviewListReqType, 'pagingData'> & { userId: number }) => {
  // Todo: 쿼리키에 필터 추가
  const { data } = await fetcher.post<ReviewListResType>(
    END_POINT.REVIEW.MYLIST,
    {
      userId,
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

export const getReviewCommentList = async ({
  reviewId,
}: ReviewCommentReqType) => {
  const { data } = await fetcher.get<ReviewCommentResType>(
    END_POINT.REVIEW.COMMENT(reviewId)
  );

  return data;
};
