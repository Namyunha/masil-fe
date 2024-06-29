import FilterTab from '@/components/FilterTab';
import Icon from '@/components/Icon';
import { LOCATION, TAGS } from '@/constants/reviewFilter';
import { RecommendedCafeType } from '@/types/cafe';

type RecommendedCafeInfoProps = Pick<
  RecommendedCafeType,
  'cafeLoca' | 'cafeName' | 'rating' | 'tag'
>;

export default function RecommendedCafeInfo({
  cafeLoca,
  cafeName,
  rating,
  tag,
}: RecommendedCafeInfoProps) {
  return (
    <>
      <div />
      <div className="flex flex-col gap-[8px]">
        <span className="text-14 font-bold">{LOCATION[cafeLoca]}</span>
        <span className="text-18 font-bold">{cafeName}</span>
        <div className="flex items-center">
          <Icon name="star" size={12} className="rounded-lg" />
          <span className="text-14 font-bold">{rating}</span>
        </div>
      </div>
      <div className="flex">
        <FilterTab key={tag} value={TAGS[tag]} isActive={false} />
      </div>
    </>
  );
}
