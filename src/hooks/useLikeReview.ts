import { useState } from 'react';
import { useReviewLikeMutation } from '@/api/review/queries';

type UseLikeReviewProps = {
  isLike: boolean;
  reviewId: number;
};

export default function useLikeReview({
  isLike,
  reviewId,
}: UseLikeReviewProps) {
  const [likeState, setLikeState] = useState(isLike);

  // Todo: 좋아요 상태 변경시 리뷰 조회 캐싱 만료시키기
  const { mutate } = useReviewLikeMutation({
    reviewId,
    isLike: !likeState,
    setLikeState,
  });

  // Todo: 좋아요 기능 디바운스 적용
  const likeClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    mutate();
  };

  return { likeState, likeClickHandler };
}
