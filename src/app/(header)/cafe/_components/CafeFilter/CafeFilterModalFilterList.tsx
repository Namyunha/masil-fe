import React from 'react';
import FilterTab from '@/components/FilterTab';
import { LOCATION, TAGS } from '@/constants/reviewFilter';
import { LocationKey, TagsKey } from '@/types/review';

type ToggleKeyType =
  | ((location: LocationKey) => void)
  | ((tags: TagsKey) => void);

type CafeFilterModalFilterListProps = {
  filterList: typeof LOCATION | typeof TAGS;
  activeKey: string | string[];
  toggleKey: ToggleKeyType;
  isActive: (key: string, activeKey: string | string[]) => boolean;
};

export default function CafeFilterModalFilterList({
  filterList,
  activeKey,
  toggleKey,
  isActive,
}: CafeFilterModalFilterListProps) {
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
