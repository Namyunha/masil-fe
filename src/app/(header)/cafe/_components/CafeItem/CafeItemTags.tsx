import FilterTab from '@/components/FilterTab';
import { TAGS } from '@/constants/reviewFilter';
import { CafeItemType } from '@/types/cafe';

type CafeItemTagsProps = Pick<CafeItemType, 'tags'>;

export default function CafeItemTags({ tags }: CafeItemTagsProps) {
  return (
    <div className="flex gap-8 flex-wrap">
      {tags.map((tag) => (
        <FilterTab
          key={tag}
          iconName={tag}
          value={TAGS[tag]}
          isActive={false}
        />
      ))}
    </div>
  );
}
