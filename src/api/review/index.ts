import { END_POINT } from '@/constants/api';
import { ReviewListReqType, ReviewListResType } from '@/types/review';
import { fetcher } from '../fetcher';

export const getReviewList = async ({
  tags,
  pagingData,
}: ReviewListReqType) => {
  // Todo: 쿼리키에 필터 추가
  const { data } = await fetcher.post<ReviewListResType>(
    END_POINT.REVIEW.LIST,
    {
      tags,
      pagingData,
    }
  );

  return data;
};
