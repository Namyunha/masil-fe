import clsx from 'clsx';
import { RecommendedCafeType } from '@/types/cafe';

type RecommendedCafeCarouselIndicatorProps = Pick<
  RecommendedCafeType,
  'cafeId'
> & {
  index: number;
  currentIndex: number;
  clickHandler: () => void;
};

export default function RecommendedCafeCarouselIndicator({
  cafeId,
  index,
  currentIndex,
  clickHandler,
}: RecommendedCafeCarouselIndicatorProps) {
  return (
    <div
      key={cafeId}
      className={clsx('w-1 h-1 rounded-full cursor-pointer', {
        ['bg-primary']: index === currentIndex,
        ['bg-text_light_grey']: index !== currentIndex,
      })}
      onClick={clickHandler}
    />
  );
}
