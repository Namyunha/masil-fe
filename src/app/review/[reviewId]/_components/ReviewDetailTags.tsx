import FilterTab from '@/components/FilterTab';
import { TAGS } from '@/constants/reviewFilter';
import { ReviewDetailType } from '@/types/review';

type ReviewDetailTagsProps = Pick<ReviewDetailType, 'tags'>;

export default function ReviewDetailTags({ tags }: ReviewDetailTagsProps) {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {tags.map((tag) => (
        <FilterTab key={tag} value={TAGS[tag]} iconName={tag} />
      ))}
    </div>
  );
}
