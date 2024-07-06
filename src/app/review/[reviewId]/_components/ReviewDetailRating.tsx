import Icon from '@/components/Icon';
import { ReviewDetailType } from '@/types/review';

type ReviewDetailRatingProps = Pick<ReviewDetailType, 'rating'>;

export default function ReviewDetailRating({
  rating,
}: ReviewDetailRatingProps) {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const TOTAL_STARS = 5;
  const emptyStars = TOTAL_STARS - fullStars - (hasHalfStar ? 1 : 0);

  return (
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
  );
}
