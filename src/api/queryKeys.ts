import { createQueryKeys } from '@lukemorales/query-key-factory';

export const reviewKeys = createQueryKeys('review', {
  reviewList: { queryKey: ['getReviewList'] },
  reviewCommentList: { queryKey: ['getReviewList'] },
  myReviewList: { queryKey: ['getReviewList'] },
});

export const cafeKeys = createQueryKeys('cafe', {
  recommendedCafeList: { queryKey: ['getRecommendedCafeList'] },
  cafeList: { queryKey: ['getCafeList'] },
});
