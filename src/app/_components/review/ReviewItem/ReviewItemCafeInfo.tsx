'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import Icon from '@/components/Icon/Icon';
import { ROUTE_PATH } from '@/constants/route';
import useLikeCafe from '@/hooks/useLikeCafe';
import { ReviewItemType } from '@/types/review';

type ReviewItemCafeInfoProps = Pick<ReviewItemType, 'cafeInfo'>;

export default function ReviewItemCafeInfo({
  cafeInfo,
}: ReviewItemCafeInfoProps) {
  const router = useRouter();

  const { likeState, likeClickHandler } = useLikeCafe({
    isLike: cafeInfo.isLike,
    cafeId: cafeInfo.cafeId,
  });

  const cafeClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    router.push(ROUTE_PATH.CAFE_DETAIL(cafeInfo.cafeId));
  };

  return (
    <div
      className="flex justify-between items-center px-12 py-24 rounded-md border border-bg_disabled"
      onClick={(e) => cafeClickHandler(e)}>
      <div className="flex flex-col gap-1">
        <span className="text-14 font-bold">{cafeInfo.cafeName}</span>
        <span className="text-12 text-text_grey">{cafeInfo.cafeLoca}</span>
      </div>
      <button
        className={clsx(
          'flex items-center justify-center p-12 rounded-full border',
          {
            ['border-stroke_focused bg-button_icon_only_bg']: likeState,
            ['border-stroke_grey']: !likeState,
          }
        )}
        onClick={likeClickHandler}>
        <Icon name={likeState ? 'bookmark_marked' : 'bookmark'} size={16} />
      </button>
    </div>
  );
}
