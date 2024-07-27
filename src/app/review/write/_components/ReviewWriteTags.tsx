import FilterTab from '@/components/FilterTab';
import { TAGS } from '@/constants/reviewFilter';
import { reviewStore } from '@/store/userStore';
import { ReviewDetailType, TagsKey } from '@/types/review';

type ReviewDetailTagsProps = Pick<ReviewDetailType, 'tags'>;

export default function ReviewWriteTags({ tags }: ReviewDetailTagsProps) {
  const reviewStatus = reviewStore();

  const addCategoryHandler = (tag: TagsKey) => {
    !reviewStatus.likeCategory.find((el) => el === tag)
      ? reviewStatus.setLikeCategory([...reviewStatus.likeCategory, tag])
      : reviewStatus.setLikeCategory(
          reviewStatus.likeCategory.filter((el) => el !== tag)
        );
  };

  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {tags.map((tag) => (
        <FilterTab
          onClick={() => addCategoryHandler(tag)}
          isActive={!!reviewStatus.likeCategory.find((el) => el === tag)}
          key={tag}
          value={TAGS[tag]}
          iconName={tag}
        />
      ))}
    </div>
  );
}
