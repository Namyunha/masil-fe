import Icon from '@/components/Icon';
import { SORTING } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { SortingKey } from '@/types/review';
import ReviewFilterTab from './ReviewFilterTab';

export default function ReviewFilterModalSorting() {
  const { activeSorting, toggleSorting } = useFilterStore();

  return (
    <div>
      <div className="flex justify-between px-8 py-12">
        <span className="text-14 font-bold">정렬</span>
        <Icon name="refresh" size={20} filter="GRAY" />
      </div>
      <ul className="flex flex-wrap gap-16 pt-16 border-t border-stroke_grey">
        {Object.entries(SORTING).map(([key, value]) => {
          const isActive = key === activeSorting;

          return (
            <ReviewFilterTab
              key={key}
              value={value}
              isActive={isActive}
              onClick={() => toggleSorting(key as SortingKey)}
            />
          );
        })}
      </ul>
    </div>
  );
}
