import Icon from '@/components/Icon';
import { SORTING } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { SortingKey } from '@/types/review';
import FilterTab from '../../../../components/FilterTab';
import ReviewFilterModalTitle from './ReviewFilterModalTitle';

export default function ReviewFilterModalSorting() {
  const { activeSorting, toggleSorting, resetFilter } = useFilterStore();

  return (
    <div>
      <div className="flex justify-between">
        <ReviewFilterModalTitle title="정렬" subInfo="선택 1개" />
        <button onClick={resetFilter} className="px-8 py-12">
          <Icon name="refresh" size={20} filter="GRAY" />
        </button>
      </div>
      <ul className="flex flex-wrap gap-16 pt-16 border-t border-stroke_grey">
        {Object.entries(SORTING).map(([key, value]) => {
          const isActive = key === activeSorting;

          return (
            <li key={key}>
              <FilterTab
                value={value}
                isActive={isActive}
                onClick={() => toggleSorting(key as SortingKey)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
