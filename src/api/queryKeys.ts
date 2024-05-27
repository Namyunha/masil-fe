import { createQueryKeys } from '@lukemorales/query-key-factory';

export const reviewKeys = createQueryKeys('review', {
  reviewList: { queryKey: ['getReviewList'] },
});
