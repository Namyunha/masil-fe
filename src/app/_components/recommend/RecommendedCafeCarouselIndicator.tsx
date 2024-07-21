import clsx from 'clsx';

type RecommendedCafeCarouselIndicatorProps = {
  index: number;
  currentIndex: number;
  clickHandler: () => void;
};

export default function RecommendedCafeCarouselIndicator({
  index,
  currentIndex,
  clickHandler,
}: RecommendedCafeCarouselIndicatorProps) {
  return (
    <div
      className={clsx('w-1 h-1 rounded-full cursor-pointer', {
        ['bg-primary']: index === currentIndex,
        ['bg-text_light_grey']: index !== currentIndex,
      })}
      onClick={clickHandler}
    />
  );
}
