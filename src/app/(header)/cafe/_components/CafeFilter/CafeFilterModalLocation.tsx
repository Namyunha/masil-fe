import { LOCATION } from '@/constants/reviewFilter';
import { useCafeFilterStore } from '@/store/filterStore';
import CafeFilterModalFilterList from './CafeFilterModalFilterList';
import CafeFilterModalTitle from './CafeFilterModalTitle';

export default function CafeFilterModalLocation() {
  const { activeLocation, toggleLocation } = useCafeFilterStore();

  return (
    <div>
      <CafeFilterModalTitle title="지역" subInfo="선택 1개" />
      <CafeFilterModalFilterList
        filterList={LOCATION}
        activeKey={activeLocation}
        toggleKey={toggleLocation}
        isActive={(key, activeKey) => activeKey === key}
      />
    </div>
  );
}
