import { END_POINT } from '@/constants/api';
import { CafeRecommendResType } from '@/types/cafe';
import { fetcher } from '../fetcher';

export const getRecommendedCafeList = async () => {
  const { data } = await fetcher.get<CafeRecommendResType>(
    END_POINT.CAFE.RECOMMEND
  );

  return data;
};
