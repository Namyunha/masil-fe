import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { DEFAULT_CURSOR, DEFAULT_SIZE } from '@/constants/api';
import { ReviewLikeReqType, ReviewListReqType } from '@/types/review';
import { reviewKeys } from './../queryKeys';
import { patchReviewLike, postReviewList } from '.';

type ReviewListQueryType = Pick<
  ReviewListReqType,
  'tags' | 'sorting' | 'location'
> & {
  pageSize?: number;
};

export function useReviewListInfiniteQuery({
  tags,
  sorting,
  location,
  pageSize = DEFAULT_SIZE,
}: ReviewListQueryType) {
  // Todo: 쿼리키에 필터 추가
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

// Todo: 쿼리키 추가하기?
export function useReviewLikeMutation({
  reviewId,
  isLike,
  setLikeState,
}: ReviewLikeReqType & {
  setLikeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return useMutation({
    mutationFn: () => patchReviewLike({ reviewId, isLike }),
    onSuccess: (data) => {
      // Todo: 성공할 경우 토스트 팝업 띄우기
      const newLikeState = data.data.isLike;
      setLikeState(newLikeState);
    },
    onError: (error) => {
      // Todo: 실패할 경우 토스트 팝업 띄우기
      console.log(error.message);
    },
  });
}
