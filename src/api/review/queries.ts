import { useQuery } from '@tanstack/react-query';
import { reviewKeys } from './../queryKeys';
import { getReviewList } from '.';

// Todo: 무한 스크롤로 구현
export function useReviewListQuery() {
  return useQuery({
    ...reviewKeys.reviewList,
    queryFn: () => getReviewList(),
  });
}
