import { useState } from 'react';
import { useReviewLikeMutation } from '@/api/review/queries';
import Icon from '@/components/Icon';
import { ReviewItemType } from '@/types/review';

type ReviewItemButtonsProps = Pick<ReviewItemType, 'reviewId' | 'isLike'>;

export default function ReviewItemButtons({
  reviewId,
  isLike,
}: ReviewItemButtonsProps) {
  const [likeState, setLikeState] = useState(isLike);

  // Todo: 좋아요 상태 변경시 리뷰 조회 캐싱 만료시키기
  const { mutate } = useReviewLikeMutation({
    reviewId,
    isLike: likeState,
    setLikeState,
  });

  const likeClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    mutate();
  };

  // Todo: 좋아요 기능 디바운싱/스로틀링 적용할지 고민후 적용
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
