'use client';

import { useRecommendedCafeListQuery } from '@/api/cafe/queries';
import useSlide from '@/hooks/useSlide';
import RecommendedCafeArrow from './RecommendedCafeArrow';
import RecommendedCafeCarouselIndicator from './RecommendedCafeCarouselIndicator';
import RecommendedCafeCarouselItem from './RecommendedCafeCarouselItem';

export default function RecommendedCafeCarousel() {
  const { data, isSuccess } = useRecommendedCafeListQuery();
  const slideMaxIndex = isSuccess ? data.data.cafes.length - 1 : 0;
  const {
    slideRef,
    currentIndex,
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler,
    clickHandler,
  } = useSlide({ slideMaxIndex });

  // Todo: 로딩시 스켈레톤 UI로 구현하기
  return (
    <>
      <div className="relative flex flex-col overflow-hidden rounded-2xl shadow-elevation2">
        <ul
          className="flex"
          ref={slideRef}
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}>
          {isSuccess &&
            data.data.cafes.map((cafe) => (
              <RecommendedCafeCarouselItem key={cafe.cafeId} {...cafe} />
            ))}
        </ul>
        <RecommendedCafeArrow
          leftClickHandler={() => clickHandler({ direction: 'left' })}
          rightClickHandler={() => clickHandler({ direction: 'right' })}
        />
      </div>
      <div className="flex justify-center gap-8 p-[10px]">
        {isSuccess &&
          data.data.cafes.map((cafe, index) => (
            <RecommendedCafeCarouselIndicator
              key={cafe.cafeId}
              index={index}
              currentIndex={currentIndex}
              clickHandler={() => clickHandler({ targetIndex: index })}
            />
          ))}
      </div>
    </>
  );
}
