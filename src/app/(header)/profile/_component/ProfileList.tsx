'use client';

import { useMyReviewListInfiniteQuery } from '@/api/review/queries';
import ReviewItem from '@/app/_components/review/ReviewItem/ReviewItem';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';

export default function ReviewList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useMyReviewListInfiniteQuery({ userId: 2 });

  const targetRef = useInfiniteObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  // Todo: 로딩시 스켈레톤 UI로 구현하기
  return (
    <>
      {status === 'error' && <>{error.message}</>}
      {status === 'pending' && <LoadingSpinner />}
      {status === 'success' && (
        <ul className="flex flex-col gap-16">
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
