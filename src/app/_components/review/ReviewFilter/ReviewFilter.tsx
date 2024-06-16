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
          className="px-12 py-6 rounded-xl border border-stroke_grey"
          onClick={toggleFilterModalHandler}>
          <Icon name="filter" size={20} filter="GRAY" />
        </button>
        <div className="h-[34px] w-[1px] border-r border-stroke_grey" />
        <div className="overflow-x-scroll">
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
