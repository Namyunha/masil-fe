import { END_POINT } from '@/constants/api';
import {
  ReviewCommentDeleteReqType,
  ReviewCommentDeleteResType,
  ReviewCommentReqType,
  ReviewCommentResType,
  ReviewCommentUpdateReqType,
  ReviewCommentUpdateResType,
  ReviewCommentWriteReqType,
  ReviewCommentWriteResType,
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

export const postReviewComment = async ({
  reviewId,
  comment,
}: ReviewCommentWriteReqType) => {
  const { data } = await fetcher.post<ReviewCommentWriteResType>(
    END_POINT.REVIEW.COMMENT_WRITE,
    {
      reviewId,
      comment,
    }
  );

  return data;
};

export const patchReviewComment = async ({
  reviewId,
  commentId,
  comment,
}: ReviewCommentUpdateReqType) => {
  const { data } = await fetcher.patch<ReviewCommentUpdateResType>(
    END_POINT.REVIEW.COMMENT_UPDATE,
    {
      reviewId,
      commentId,
      comment,
    }
  );

  return data;
};

export const deleteReviewComment = async ({
  reviewId,
  commentId,
}: ReviewCommentDeleteReqType) => {
  const { data } = await fetcher.delete<ReviewCommentDeleteResType>(
    END_POINT.REVIEW.COMMENT_DELETE,
    {
      data: {
        reviewId,
        commentId,
      },
    }
  );

  return data;
};
