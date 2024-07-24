import { END_POINT } from '@/constants/api';
import {
  CafeLikeReqType,
  CafeLikeResType,
  CafeListReqType,
  CafeListResType,
  CafeRecommendResType,
} from '@/types/cafe';
import { fetcher } from '../fetcher';

export const getRecommendedCafeList = async () => {
  const { data } = await fetcher.get<CafeRecommendResType>(
    END_POINT.CAFE.RECOMMEND
  );

  return data;
};

export const patchCafeLike = async ({ cafeId, isLike }: CafeLikeReqType) => {
  const { data } = await fetcher.patch<CafeLikeResType>(END_POINT.CAFE.LIKE, {
    cafeId,
    isLike,
  });

  return data;
};

export const postCafeList = async ({
  tags,
  location,
  pagingData,
}: CafeListReqType) => {
  const { data } = await fetcher.post<CafeListResType>(END_POINT.CAFE.LIST, {
    tags,
    location,
    pagingData,
  });

  return data;
};
