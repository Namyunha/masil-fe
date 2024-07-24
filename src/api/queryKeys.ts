import { createQueryKeys } from '@lukemorales/query-key-factory';

export const reviewKeys = createQueryKeys('review', {
  reviewList: { queryKey: ['getReviewList'] },
  myReviewList: { queryKey: ['getMyReviewList'] },
  reviewCommentList: (reviewId: string) => ({
    queryKey: ['getCommentList', reviewId],
  }),
});

export const cafeKeys = createQueryKeys('cafe', {
  recommendedCafeList: { queryKey: ['getRecommendedCafeList'] },
  cafeList: { queryKey: ['getCafeList'] },
});
