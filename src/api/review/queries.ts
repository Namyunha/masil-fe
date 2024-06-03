import { useInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_CURSOR, DEFAULT_SIZE } from '@/constants/api';
import { reviewKeys } from './../queryKeys';
import { getReviewList } from '.';

export function useReviewListInfiniteQuery() {
  return useInfiniteQuery({
    ...reviewKeys.reviewList, // Todo: 필터링 정해지면 인수 추가
    initialPageParam: DEFAULT_CURSOR,
    queryFn: ({ pageParam }) =>
      getReviewList({ cursor: pageParam, size: DEFAULT_SIZE }),
    getNextPageParam: (lastPage) => {
      const lastReview = lastPage.data.reviews.at(-1);
      const nextCursor = lastReview?.reviewId;
      return lastPage.hasNext ? nextCursor : undefined;
    },
  });
}
