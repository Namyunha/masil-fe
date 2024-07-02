import { LOCATION } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import ReviewFilterModalFilterList from './\bReviewFilterModalFilterList';
import ReviewFilterModalTitle from './ReviewFilterModalTitle';

export default function ReviewFilterModalLocation() {
  const { activeLocation, toggleLocation } = useFilterStore();

  return (
    <div>
      <ReviewFilterModalTitle title="지역" subInfo="선택 1개" />
      <ReviewFilterModalFilterList
        filterList={LOCATION}
        activeKey={activeLocation}
        toggleKey={toggleLocation}
        isActive={(key, activeKey) => activeKey === key}
      />
    </div>
  );
}
