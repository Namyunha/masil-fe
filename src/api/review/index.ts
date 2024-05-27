import { END_POINT } from '@/constants/api';
import { ReviewListResType } from '@/types/review';
import { fetcher } from '../fetcher';

// Todo: 무한 스크롤로 구현
export const getReviewList = async () => {
  const { data } = await fetcher<ReviewListResType>(END_POINT.REVIEW.LIST);

  return data;
};
