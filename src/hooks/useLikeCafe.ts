import { useState } from 'react';
import { useCafeLikeMutation } from '@/api/cafe/queries';

type UseLikeCafeProps = {
  isLike: boolean;
  cafeId: number;
};

export default function useLikeCafe({ isLike, cafeId }: UseLikeCafeProps) {
  const [likeState, setLikeState] = useState(isLike);

  // Todo: 좋아요 상태 변경시 리뷰 조회 캐싱 만료시키기
  const { mutate } = useCafeLikeMutation({
    cafeId,
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
