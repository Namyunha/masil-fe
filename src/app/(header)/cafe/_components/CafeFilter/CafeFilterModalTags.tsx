import { TAGS } from '@/constants/reviewFilter';
import { useCafeFilterStore } from '@/store/filterStore';
import { TagsKey } from '@/types/review';
import CafeFilterModalFilterList from './CafeFilterModalFilterList';
import CafeFilterModalTitle from './CafeFilterModalTitle';

export default function CafeFilterModalTags() {
  const { activeTags, toggleTag } = useCafeFilterStore();

  return (
    <div>
      <CafeFilterModalTitle title="키워드" subInfo="최대 3개" />
      <CafeFilterModalFilterList
        filterList={TAGS}
        activeKey={activeTags}
        toggleKey={toggleTag}
        isActive={(key, activeKey) => activeKey.includes(key as TagsKey)}
      />
    </div>
  );
}
