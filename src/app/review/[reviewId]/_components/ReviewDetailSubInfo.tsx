'use client';

import ShareButton from '@/components/Button/ShareButton';
import Icon from '@/components/Icon/Icon';
import useLikeReview from '@/hooks/useLikeReview';
import { ReviewDetailType } from '@/types/review';

type ReviewDetailSubInfoProps = Pick<
  ReviewDetailType,
  'reviewId' | 'isLike' | 'likeCount'
>;

export default function ReviewDetailSubInfo({
  reviewId,
  isLike,
  likeCount,
}: ReviewDetailSubInfoProps) {
  const { likeState, likeClickHandler } = useLikeReview({ isLike, reviewId });
  const preLikeCount = likeState ? likeCount : likeCount - 1;
  const postLikeCount = likeState ? likeCount + 1 : likeCount;
  const newLikeCount = isLike ? preLikeCount : postLikeCount;

  // Todo: 공유하기 기능 추가?
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-8">
        <button onClick={likeClickHandler}>
          <Icon name={likeState ? 'heart_full' : 'heart'} />
        </button>
        <p className="text-14">
          <span className="font-bold">{newLikeCount}</span>
          명이 좋아합니다.
        </p>
      </div>
      <ShareButton size="l" />
    </div>
  );
}
