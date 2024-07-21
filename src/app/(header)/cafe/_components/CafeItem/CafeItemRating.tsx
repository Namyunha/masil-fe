import Icon from '@/components/Icon';
import { CafeItemType } from '@/types/cafe';

type CafeItemRatingProps = Pick<CafeItemType, 'rating' | 'reviewCount'>;

export default function CafeItemRating({
  rating,
  reviewCount,
}: CafeItemRatingProps) {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const TOTAL_STARS = 5;
  const emptyStars = TOTAL_STARS - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-8">
      <div className="flex gap-12 items-center justify-center">
        <div className="text-text_primary text-18 font-bold">{rating}</div>
        <div className="flex gap-[4px]">
          {[...Array(fullStars)].map((_, index) => (
            <Icon key={index} name="star" size={16} />
          ))}
          {hasHalfStar && <Icon name="star_half" size={16} />}
          {[...Array(emptyStars)].map((_, index) => (
            <Icon key={index} name="star_empty" size={16} />
          ))}
        </div>
      </div>
      <div className="text-12 text-text_grey">{reviewCount}명</div>
    </div>
  );
}
