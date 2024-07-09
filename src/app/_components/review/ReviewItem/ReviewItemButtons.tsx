import Icon from '@/components/Icon';
import useLikeReview from '@/hooks/useLikeReview';
import { ReviewItemType } from '@/types/review';

type ReviewItemButtonsProps = Pick<ReviewItemType, 'reviewId' | 'isLike'>;

export default function ReviewItemButtons({
  reviewId,
  isLike,
}: ReviewItemButtonsProps) {
  const { likeState, likeClickHandler } = useLikeReview({ isLike, reviewId });

  // Memo: 코멘트/공유 버튼 상호작용 여부 물어보기
  return (
    <div className="flex justify-between items-center px-8">
      <div className="flex items-center gap-16">
        <button onClick={likeClickHandler}>
          <Icon name={likeState ? 'heart_full' : 'heart'} />
        </button>
        <Icon name="comment" />
      </div>
      <Icon name="upload" />
    </div>
  );
}
