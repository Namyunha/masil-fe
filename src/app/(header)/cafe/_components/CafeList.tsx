'use client';

import { useCafeListInfiniteQuery } from '@/api/cafe/queries';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useInfiniteObserver } from '@/hooks/useInfiniteObserver';
import { useCafeFilterStore } from '@/store/filterStore';
import CafeItem from './CafeItem/CafeItem';

export default function CafeList() {
  const { activeTags, activeLocation } = useCafeFilterStore();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useCafeListInfiniteQuery({
    tags: activeTags,
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
        <ul className="flex flex-col gap-16">
          {data.pages.map((page) =>
            page.data.cafeInfos.map((cafeInfo) => {
              return <CafeItem key={cafeInfo.cafeId} {...cafeInfo} />;
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
