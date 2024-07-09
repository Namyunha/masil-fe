import { LOCATION, SORTING, TAGS } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { LocationKey, SortingKey, TagsKey } from '@/types/review';
import FilterTab from '../../../../components/FilterTab';

type ReviewFilterListProps = {
  onClick: () => void;
};

export default function ReviewFilterList({ onClick }: ReviewFilterListProps) {
  const { activeSorting, activeLocation, activeTags } = useFilterStore();
  const activeFilters = [activeSorting, activeLocation, ...activeTags];

  const getFilterTabValue = (filter: TagsKey | SortingKey | LocationKey) => {
    switch (true) {
      case filter in TAGS:
        return TAGS[filter as TagsKey];
      case filter in SORTING:
        return SORTING[filter as SortingKey];
      default:
        return LOCATION[filter as LocationKey];
    }
  };

  return (
    <ul className="flex flex-nowrap items-center gap-8">
      {activeFilters.map((filter) => (
        <li key={filter}>
          <FilterTab
            isActive
            value={getFilterTabValue(filter)}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}
