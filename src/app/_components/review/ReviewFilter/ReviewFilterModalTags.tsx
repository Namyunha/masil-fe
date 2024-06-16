import { TAGS } from '@/constants/reviewFilter';
import { useFilterStore } from '@/store/filterStore';
import { TagsKey } from '@/types/review';
import ReviewFilterTab from './ReviewFilterTab';

export default function ReviewFilterModalTags() {
  const { activeTags, toggleTag } = useFilterStore();

  return (
    <div>
      <div className="px-8 py-12 text-14 font-bold">키워드</div>
      <ul className="flex flex-wrap gap-16 pt-16 border-t border-stroke_grey">
        {Object.entries(TAGS).map(([key, value]) => {
          const isActive = activeTags.includes(key as TagsKey);

          return (
            <ReviewFilterTab
              key={key}
              value={value}
              isActive={isActive}
              onClick={() => toggleTag(key as TagsKey)}
            />
          );
        })}
      </ul>
    </div>
  );
}
