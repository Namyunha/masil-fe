'use client';

import React, { useState } from 'react';
import Icon from '@/components/Icon/Icon';
import { reviewStore } from '@/store/userStore';

export default function RateStars() {
  const reviewState = reviewStore();
  const starArray = [1, 2, 3, 4, 5];
  const [coloredStar, setColoredStar] = useState(0);
  const [colorFixed, setColorFixed] = useState(false);

  const hoverStarHandler = (el: number) => {
    !colorFixed && setColoredStar(el);
  };

  const checkStarHandler = (el: number) => {
    setColorFixed(true);
    setColoredStar(el);
    reviewState.setRate(el);
  };

  return (
    <div className="flex justify-center space-x-1">
      {starArray.map((el, idx) => (
        <span
          className="cursor-pointer my-5"
          onMouseEnter={() => hoverStarHandler(el)}
          onClick={() => checkStarHandler(el)}
          key={idx}>
          {coloredStar >= el ? (
            <Icon name="star" filter="PRIMARY" />
          ) : (
            <Icon name="star_empty" />
          )}
        </span>
      ))}
    </div>
  );
}
