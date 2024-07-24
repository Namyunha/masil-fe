'use client';

import ShareButton from '@/components/Button/ShareButton';
import Icon from '@/components/Icon/Icon';
import useLikeCafe from '@/hooks/useLikeCafe';
import { CafeDetailType } from '@/types/cafe';

type CafeDetailMainInfoProps = Pick<
  CafeDetailType,
  'cafeId' | 'cafeName' | 'cafeLoca' | 'cafeRating' | 'reviewCount' | 'isLike'
>;

export default function CafeDetailMainInfo({
  cafeId,
  cafeName,
  cafeLoca,
  cafeRating,
  reviewCount,
  isLike,
}: CafeDetailMainInfoProps) {
  const { likeState, likeClickHandler } = useLikeCafe({
    isLike: isLike,
    cafeId: cafeId,
  });

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <span className="text-18 font-bold text-center">{cafeName}</span>
        <span className="text-14 text-center">{cafeLoca}</span>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="flex items-center text-14 font-bold">
          <Icon name="star" size={16} />
          {cafeRating}
        </div>
        <span className="text-10 text-text_grey">{reviewCount}명</span>
      </div>
      <div className="flex justify-end gap-16 items-center">
        <button onClick={likeClickHandler}>
          <Icon name={likeState ? 'bookmark_marked' : 'bookmark'} size={16} />
        </button>
        <ShareButton size="l" />
      </div>
    </div>
  );
}
