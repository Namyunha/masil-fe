import { LOCATION, SORTING, TAGS } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import ReviewFilterTab from './ReviewFilterTab';

type ReviewFilterListProps = {
  onClick: () => void;
};

export default function ReviewFilterList({ onClick }: ReviewFilterListProps) {
  const { activeSorting, activeLocation, activeTags } = useFilterStore();

  return (
    <ul className="flex flex-nowrap items-center gap-8">
      <ReviewFilterTab
        isActive
        value={SORTING[activeSorting]}
        onClick={onClick}
      />
      {activeTags.map((activeTag) => (
        <ReviewFilterTab
          key={activeTag}
          isActive
          value={TAGS[activeTag]}
          onClick={onClick}
        />
      ))}
      <ReviewFilterTab
        isActive
        value={LOCATION[activeLocation]}
        onClick={onClick}
      />
    </ul>
  );
}
