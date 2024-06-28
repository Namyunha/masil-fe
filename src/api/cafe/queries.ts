import { useQuery } from '@tanstack/react-query';
import { cafeKeys } from './../queryKeys';
import { getRecommendedCafeList } from '.';

export function useRecommendedCafeListQuery() {
  return useQuery({
    ...cafeKeys.recommendedCafeList,
    queryFn: getRecommendedCafeList,
  });
}
