'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { reviewKeys } from '@/api/queryKeys';
import Icon from '@/components/Icon/Icon';
import ReviewFilterList from './ReviewFilterList';
import ReviewFilterModal from './ReviewFilterModal';

export default function ReviewFilter() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const toggleFilterModalHandler = () => {
    if (isFilterModalOpen) {
      queryClient.invalidateQueries(reviewKeys.reviewList);
    }

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
