import { END_POINT } from '@/constants/api';
import {
  CafeLikeReqType,
  CafeLikeResType,
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
