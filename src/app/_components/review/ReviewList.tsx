'use client';

import { useReviewListInfiniteQuery } from '@/api/review/queries';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';
import ReviewItem from './ReviewItem';

export default function ReviewList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useReviewListInfiniteQuery();

  const targetRef = useInfiniteObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  return (
    <>
      {status === 'error' && <>{error.message}</>}
      {status === 'pending' && <>로딩중...</>}
      {status === 'success' && (
        <ul>
          {data.pages.map((page) =>
            page.data.reviews.map((review) => {
              return <ReviewItem key={review.reviewId} {...review} />;
            })
          )}
        </ul>
      )}
      {isFetchingNextPage ? (
        <LoadingSpinner />
      ) : (
        <div className="h-[1px]" ref={targetRef} />
      )}
    </>
  );
}
