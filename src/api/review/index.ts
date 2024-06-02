import { DEFAULT_SIZE, END_POINT } from '@/constants/api';
import { ReviewListResType } from '@/types/review';
import { fetcher } from '../fetcher';

export const getReviewList = async ({
  cursor,
  size = DEFAULT_SIZE,
}: {
  cursor: number;
  size: number;
}) => {
  const queryParameter = `?cursor=${cursor}size=${size}`;

  const { data } = await fetcher<ReviewListResType>(
    END_POINT.REVIEW.LIST + queryParameter
  );

  return data;
};
