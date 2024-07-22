import FilterTab from '@/components/FilterTab';
import { LOCATION, TAGS } from '@/constants/reviewFilter';
import { useCafeFilterStore } from '@/store/filterStore';
import { LocationKey, SortingKey, TagsKey } from '@/types/review';

type CafeFilterListProps = {
  onClick: () => void;
};

export default function CafeFilterList({ onClick }: CafeFilterListProps) {
  const { activeLocation, activeTags } = useCafeFilterStore();
  const activeFilters = [activeLocation, ...activeTags];

  const getFilterTabValue = (filter: TagsKey | SortingKey | LocationKey) => {
    switch (true) {
      case filter in TAGS:
        return TAGS[filter as TagsKey];
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
