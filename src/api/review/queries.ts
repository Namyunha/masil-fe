import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { toast } from 'react-toastify';
import ToastIcon from '@/components/Icon/ToastIcon';
import { DEFAULT_CURSOR, DEFAULT_SIZE } from '@/constants/api';
import {
  ReviewCommentDeleteReqType,
  ReviewCommentReqType,
  ReviewCommentUpdateReqType,
  ReviewCommentWriteReqType,
  ReviewLikeReqType,
  ReviewListReqType,
} from '@/types/review';
import { reviewKeys } from '../queryKeys';
import {
  deleteReviewComment,
  getReviewCommentList,
  patchReviewComment,
  patchReviewLike,
  postMyReviewList,
  postReviewComment,
  postReviewList,
} from '.';

type ReviewListQueryType = Pick<
  ReviewListReqType,
  'tags' | 'sorting' | 'location'
> & {
  pageSize?: number;
};

export function useMyReviewListInfiniteQuery({
  userId,
  pageSize = DEFAULT_SIZE,
}: {
  userId: number;
  pageSize?: number;
}) {
  return useInfiniteQuery({
    ...reviewKeys.myReviewList,
    initialPageParam: DEFAULT_CURSOR,
    queryFn: ({ pageParam }) =>
      postMyReviewList({
        userId,
        pagingData: {
          lastPostId: pageParam,
          pageSize,
        },
      }),
    getNextPageParam: (lastPage) => {
      const lastReview = lastPage.data.reviews.at(-1);
      const nextCursor = lastReview?.reviewId;
      return lastPage.data.meta.hasNext ? nextCursor : undefined;
    },
  });
}

export function useReviewListInfiniteQuery({
  tags,
  sorting,
  location,
  pageSize = DEFAULT_SIZE,
}: ReviewListQueryType) {
  return useInfiniteQuery({
    ...reviewKeys.reviewList,
    initialPageParam: DEFAULT_CURSOR,
    queryFn: ({ pageParam }) =>
      postReviewList({
        tags,
        sorting,
        location,
        pagingData: {
          lastPostId: pageParam,
          pageSize,
        },
      }),
    getNextPageParam: (lastPage) => {
      const lastReview = lastPage.data.reviews.at(-1);
      const nextCursor = lastReview?.reviewId;
      return lastPage.data.meta.hasNext ? nextCursor : undefined;
    },
  });
}

export function useReviewLikeMutation({
  reviewId,
  isLike,
  setLikeState,
}: ReviewLikeReqType & {
  setLikeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => patchReviewLike({ reviewId, isLike }),
    onSuccess: (data) => {
      toast(data.message, {
        icon: ToastIcon({ type: 'success' }),
        className: 'border border-stroke_focused',
      });

      const newLikeState = data.data.isLike;
      setLikeState(newLikeState);

      queryClient.invalidateQueries(reviewKeys.reviewList);
      queryClient.invalidateQueries(reviewKeys.myReviewList);
    },
    onError: (error) => {
      toast(error.message, {
        icon: ToastIcon({ type: 'error' }),
      });
    },
  });
}

export function useReviewCommentListQuery({ reviewId }: ReviewCommentReqType) {
  return useQuery({
    ...reviewKeys.reviewCommentList(reviewId),
    queryFn: () => getReviewCommentList({ reviewId }),
  });
}

export function useReviewCommentWriteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, comment }: ReviewCommentWriteReqType) =>
      postReviewComment({ reviewId, comment }),
    onSuccess: (data) => {
      toast(data.message, {
        icon: ToastIcon({ type: 'success' }),
        className: 'border border-stroke_focused',
      });

      const reviewId = data.data.reviewId;
      queryClient.invalidateQueries(reviewKeys.reviewCommentList(reviewId));
    },
    onError: (error) => {
      toast(error.message, {
        icon: ToastIcon({ type: 'error' }),
      });
    },
  });
}

export function useReviewCommentUpdateMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      reviewId,
      commentId,
      comment,
    }: ReviewCommentUpdateReqType) =>
      patchReviewComment({ reviewId, commentId, comment }),
    onSuccess: (data) => {
      toast(data.message, {
        icon: ToastIcon({ type: 'success' }),
        className: 'border border-stroke_focused',
      });

      const reviewId = data.data.reviewId;
      queryClient.invalidateQueries(reviewKeys.reviewCommentList(reviewId));
    },
    onError: (error) => {
      toast(error.message, {
        icon: ToastIcon({ type: 'error' }),
      });
    },
  });
}

export function useReviewCommentDeleteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, commentId }: ReviewCommentDeleteReqType) =>
      deleteReviewComment({ reviewId, commentId }),
    onSuccess: (data) => {
      toast(data.message, {
        icon: ToastIcon({ type: 'success' }),
        className: 'border border-stroke_focused',
      });

      const reviewId = data.data.reviewId;
      queryClient.invalidateQueries(reviewKeys.reviewCommentList(reviewId));
    },
    onError: (error) => {
      toast(error.message, {
        icon: ToastIcon({ type: 'error' }),
      });
    },
  });
}
