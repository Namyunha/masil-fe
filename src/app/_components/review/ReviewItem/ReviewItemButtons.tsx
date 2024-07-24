import ShareButton from '@/components/Button/ShareButton';
import Icon from '@/components/Icon/Icon';
import useLikeReview from '@/hooks/useLikeReview';
import { ReviewItemType } from '@/types/review';

type ReviewItemButtonsProps = Pick<ReviewItemType, 'reviewId' | 'isLike'>;

export default function ReviewItemButtons({
  reviewId,
  isLike,
}: ReviewItemButtonsProps) {
  const { likeState, likeClickHandler } = useLikeReview({ isLike, reviewId });

  return (
    <div className="flex justify-between items-center px-8">
      <div className="flex items-center gap-16">
        <button onClick={likeClickHandler}>
          <Icon name={likeState ? 'heart_full' : 'heart'} />
        </button>
        <Icon name="comment" />
      </div>
      <ShareButton size="l" />
    </div>
  );
}
