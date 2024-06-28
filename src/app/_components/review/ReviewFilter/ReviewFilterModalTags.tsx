import { TAGS } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { TagsKey } from '@/types/review';
import FilterTab from '../../../../components/FilterTab';
import ReviewFilterModalTitle from './ReviewFilterModalTitle';

export default function ReviewFilterModalTags() {
  const { activeTags, toggleTag } = useFilterStore();

  return (
    <div>
      <ReviewFilterModalTitle title="키워드" subInfo="최대 3개" />
      <ul className="flex flex-wrap gap-16 pt-16 border-t border-stroke_grey">
        {Object.entries(TAGS).map(([key, value]) => {
          const isActive = activeTags.includes(key as TagsKey);

          return (
            <li key={key}>
              <FilterTab
                value={value}
                isActive={isActive}
                onClick={() => toggleTag(key as TagsKey)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
