import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { DEFAULT_CURSOR, DEFAULT_SIZE } from '@/constants/api';
import { CafeLikeReqType, CafeListReqType } from '@/types/cafe';
import { cafeKeys } from './../queryKeys';
import { getRecommendedCafeList, patchCafeLike, postCafeList } from '.';

export function useRecommendedCafeListQuery() {
  return useQuery({
    ...cafeKeys.recommendedCafeList,
    queryFn: getRecommendedCafeList,
  });
}

// Todo: 쿼리키 추가하기
export function useCafeLikeMutation({
  cafeId,
  isLike,
  setLikeState,
}: CafeLikeReqType & {
  setLikeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return useMutation({
    mutationFn: () => patchCafeLike({ cafeId, isLike }),
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

type CafeListQueryType = Pick<CafeListReqType, 'tags' | 'location'> & {
  pageSize?: number;
};

export function useCafeListInfiniteQuery({
  tags,
  location,
  pageSize = DEFAULT_SIZE,
}: CafeListQueryType) {
  // Todo: 쿼리키에 필터 추가
  return useInfiniteQuery({
    ...cafeKeys.cafeList,
    initialPageParam: DEFAULT_CURSOR,
    queryFn: ({ pageParam }) =>
      postCafeList({
        tags,
        location,
        pagingData: {
          lastPostId: pageParam,
          pageSize,
        },
      }),
    getNextPageParam: (lastPage) => {
      const lastReview = lastPage.data.cafeInfos.at(-1);
      const nextCursor = lastReview?.cafeId;
      return lastPage.data.meta.hasNext ? nextCursor : undefined;
    },
  });
}
