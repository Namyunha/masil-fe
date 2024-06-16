import { LOCATION } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { LocationKey } from '@/types/review';
import ReviewFilterTab from './ReviewFilterTab';

export default function ReviewFilterModalLocation() {
  const { activeLocation, toggleLocation } = useFilterStore();

  return (
    <div>
      <div className="px-8 py-12 text-14 font-bold">지역</div>
      <ul className="flex flex-wrap gap-16 pt-16 border-t border-stroke_grey">
        {Object.entries(LOCATION).map(([key, value]) => {
          const isActive = activeLocation === key;

          return (
            <ReviewFilterTab
              key={key}
              value={value}
              isActive={isActive}
              onClick={() => toggleLocation(key as LocationKey)}
            />
          );
        })}
      </ul>
    </div>
  );
}
