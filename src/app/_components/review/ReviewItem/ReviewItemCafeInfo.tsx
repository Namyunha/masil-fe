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
    <div className="flex justify-between items-center px-12 py-24 bg-bg_disabled rounded-md border border-stroke_grey">
      <div className="flex flex-col gap-1">
        <span className="text-14 font-bold">{cafeInfo.cafeName}</span>
        <span className="text-12 text-text_grey">{cafeInfo.cafeLoca}</span>
      </div>
      <button
        className={clsx(
          'flex items-center justify-center w-32 h-32 rounded-full border',
          {
            ['border-stroke_focused']: isLike,
            ['border-stroke_grey']: !isLike,
          }
        )}
        onClick={toggleBookmarkHandler}>
        <Icon name={isLike ? 'bookmark_marked' : 'bookmark'} size={16} />
      </button>
    </div>
  );
}
