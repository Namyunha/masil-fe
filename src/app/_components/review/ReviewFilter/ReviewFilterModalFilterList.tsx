import React from 'react';
import FilterTab from '@/components/FilterTab';
import { LOCATION, SORTING, TAGS } from '@/constants/reviewFilter';
import { LocationKey, SortingKey, TagsKey } from '@/types/review';

type ToggleKeyType =
  | ((location: LocationKey) => void)
  | ((newSorting: SortingKey) => void)
  | ((tags: TagsKey) => void);

type ReviewFilterModalFilterListProps = {
  filterList: typeof LOCATION | typeof TAGS | typeof SORTING;
  activeKey: string | string[];
  toggleKey: ToggleKeyType;
  isActive: (key: string, activeKey: string | string[]) => boolean;
};

export default function ReviewFilterModalFilterList({
  filterList,
  activeKey,
  toggleKey,
  isActive,
}: ReviewFilterModalFilterListProps) {
  return (
    <ul className="flex flex-wrap gap-8 pt-16 border-t border-stroke_grey">
      {Object.entries(filterList).map(([key, value]) => {
        const filterKey = key as keyof typeof filterList;

        return (
          <li key={key}>
            <FilterTab
              value={value}
              isActive={isActive(key, activeKey)}
              onClick={() => toggleKey(filterKey)}
            />
          </li>
        );
      })}
    </ul>
  );
}
