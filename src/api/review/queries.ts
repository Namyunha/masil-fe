import { useInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_CURSOR, DEFAULT_SIZE } from '@/constants/api';
import { ReviewListReqType } from '@/types/review';
import { reviewKeys } from './../queryKeys';
import { getReviewList } from '.';

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
      getReviewList({
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
