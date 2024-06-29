import { LOCATION } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { LocationKey } from '@/types/review';
import FilterTab from '../../../../components/FilterTab';
import ReviewFilterModalTitle from './ReviewFilterModalTitle';

export default function ReviewFilterModalLocation() {
  const { activeLocation, toggleLocation } = useFilterStore();

  return (
    <div>
      <ReviewFilterModalTitle title="지역" subInfo="선택 1개" />
      <ul className="flex flex-wrap gap-16 pt-16 border-t border-stroke_grey">
        {Object.entries(LOCATION).map(([key, value]) => {
          const isActive = activeLocation === key;

          return (
            <li key={key}>
              <FilterTab
                value={value}
                isActive={isActive}
                onClick={() => toggleLocation(key as LocationKey)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
