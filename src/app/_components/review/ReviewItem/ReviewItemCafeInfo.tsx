'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Icon from '@/components/Icon';
import { ReviewItemType } from '@/types/review';

type ReviewItemCafeInfoProps = Pick<ReviewItemType, 'cafeInfo'>;

export default function ReviewItemCafeInfo({
  cafeInfo,
}: ReviewItemCafeInfoProps) {
  const [isLike, setIsLike] = useState(cafeInfo.isLike);

  const toggleBookmarkHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsLike((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center px-12 py-24 rounded-md border border-bg_disabled">
      <div className="flex flex-col gap-1">
        <span className="text-14 font-bold">{cafeInfo.cafeName}</span>
        <span className="text-12 text-text_grey">{cafeInfo.cafeLoca}</span>
      </div>
      <button
        className={clsx(
          'flex items-center justify-center p-12 rounded-full border',
          {
            ['border-stroke_focused bg-button_icon_only_bg']: isLike,
            ['border-stroke_grey']: !isLike,
          }
        )}
        onClick={toggleBookmarkHandler}>
        <Icon name={isLike ? 'bookmark_marked' : 'bookmark'} size={16} />
      </button>
    </div>
  );
}
