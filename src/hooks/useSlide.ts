import { useEffect, useRef, useState } from 'react';

const CAFE_SLIDE_INDEX = {
  START: 0,
  STEP: 1,
};
const { START, STEP } = CAFE_SLIDE_INDEX;
const MIN_SLIDE_DISTANCE = 50;
const SLIDE_START_X = 0;

export default function useSlide({ slideMaxIndex }: { slideMaxIndex: number }) {
  const [currentIndex, setCurrentIndex] = useState(START);
  const slideRef = useRef<HTMLUListElement>(null);
  const touchStartX = useRef(SLIDE_START_X);
  const touchEndX = useRef(SLIDE_START_X);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slideMaxIndex ? prev : prev + STEP));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === START ? prev : prev - STEP));
  };

  const selectSlide = (targetIndex: number) => {
    setCurrentIndex(targetIndex);
  };

  const clickHandler = ({
    targetIndex,
    direction,
  }:
    | { targetIndex: number; direction?: never }
    | { targetIndex?: never; direction: 'left' | 'right' }) => {
    const isClickIndicator = targetIndex !== undefined;

    if (isClickIndicator) {
      selectSlide(targetIndex);
      return;
    }

    const isPrevSlide = direction === 'left';

    if (isPrevSlide) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const touchStartHandler = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const touchMoveHandler = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const touchEndHandler = () => {
    if (touchStartX.current - touchEndX.current > MIN_SLIDE_DISTANCE) {
      nextSlide();
      return;
    }

    if (touchStartX.current - touchEndX.current < -MIN_SLIDE_DISTANCE) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 0.5s ease';
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return {
    slideRef,
    currentIndex,
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler,
    clickHandler,
  };
}
