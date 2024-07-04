import { TAGS } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { TagsKey } from '@/types/review';
import ReviewFilterModalFilterList from './ReviewFilterModalFilterList';
import ReviewFilterModalTitle from './ReviewFilterModalTitle';

export default function ReviewFilterModalTags() {
  const { activeTags, toggleTag } = useFilterStore();

  return (
    <div>
      <ReviewFilterModalTitle title="키워드" subInfo="최대 3개" />
      <ReviewFilterModalFilterList
        filterList={TAGS}
        activeKey={activeTags}
        toggleKey={toggleTag}
        isActive={(key, activeKey) => activeKey.includes(key as TagsKey)}
      />
    </div>
  );
}
