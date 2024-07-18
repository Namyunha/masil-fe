import { useMutation, useQuery } from '@tanstack/react-query';
import { CafeLikeReqType } from '@/types/cafe';
import { cafeKeys } from './../queryKeys';
import { getRecommendedCafeList, patchCafeLike } from '.';

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
