'use client';

import { useReviewListInfiniteQuery } from '@/api/review/queries';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';
import { useFilterStore } from '@/store/filterStore';
import ReviewItem from './ReviewItem/ReviewItem';

export default function ReviewList() {
  const { activeTags, activeSorting, activeLocation } = useFilterStore();

  // Todo: 필터 변할 시 캐싱 제거하기
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useReviewListInfiniteQuery({
    tags: activeTags,
    sorting: activeSorting,
    location: activeLocation,
  });

  const targetRef = useInfiniteObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  return (
    <>
      {status === 'error' && <>{error.message}</>}
      {status === 'pending' && <LoadingSpinner />}
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
