import { useInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_CURSOR, DEFAULT_SIZE } from '@/constants/api';
import { reviewKeys } from './../queryKeys';
import { getReviewList } from '.';

export function useReviewListInfiniteQuery({
  tags,
  pageSize = DEFAULT_SIZE,
}: {
  tags: string[];
  pageSize?: number;
}) {
  return useInfiniteQuery({
    ...reviewKeys.reviewList,
    initialPageParam: DEFAULT_CURSOR,
    queryFn: ({ pageParam }) =>
      getReviewList({
        tags,
        pagingData: {
          lastPostId: pageParam,
          pageSize,
        },
      }),
    getNextPageParam: (lastPage) => {
      const lastReview = lastPage.data.reviews.at(-1);
      const nextCursor = lastReview?.reviewId;
      return lastPage.data.hasNext ? nextCursor : undefined;
    },
  });
}
