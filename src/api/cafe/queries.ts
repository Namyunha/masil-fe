import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { toast } from 'react-toastify';
import ToastIcon from '@/components/Icon/ToastIcon';
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

export function useCafeLikeMutation({
  cafeId,
  isLike,
  setLikeState,
}: CafeLikeReqType & {
  setLikeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => patchCafeLike({ cafeId, isLike }),
    onSuccess: (data) => {
      toast(data.message, {
        icon: ToastIcon({ type: 'success' }),
        className: 'border border-stroke_focused',
      });

      const newLikeState = data.data.isLike;
      setLikeState(newLikeState);

      queryClient.invalidateQueries(cafeKeys.cafeList);
    },
    onError: (error) => {
      toast(error.message, {
        icon: ToastIcon({ type: 'error' }),
      });
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
