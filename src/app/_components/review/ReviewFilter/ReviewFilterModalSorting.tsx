import Icon from '@/components/Icon';
import { SORTING } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import ReviewFilterModalFilterList from './ReviewFilterModalFilterList';
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
      <ReviewFilterModalFilterList
        filterList={SORTING}
        activeKey={activeSorting}
        toggleKey={toggleSorting}
        isActive={(key, activeKey) => activeKey === key}
      />
    </div>
  );
}
