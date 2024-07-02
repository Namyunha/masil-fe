'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import ReviewFilterList from './ReviewFilterList';
import ReviewFilterModal from './ReviewFilterModal';

export default function ReviewFilter() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const toggleFilterModalHandler = () => {
    setIsFilterModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex gap-8">
        <button
          className="px-8 py-6 rounded-xl border border-stroke_grey shadow-elevation1"
          onClick={toggleFilterModalHandler}>
          <Icon name="filter" size={20} />
        </button>
        <div className="h-[34px] w-[1px] border-r border-stroke_grey" />
        <div className="overflow-x-scroll scrollbar-none">
          <ReviewFilterList onClick={toggleFilterModalHandler} />
        </div>
      </div>
      <ReviewFilterModal
        isOpen={isFilterModalOpen}
        closeHandler={toggleFilterModalHandler}
      />
    </>
  );
}
