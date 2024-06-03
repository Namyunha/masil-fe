'use client';

import { useParams } from 'next/navigation';

export default function ReviewDetail() {
  const { reviewId } = useParams();

  return <>상세 리뷰: {reviewId}</>;
}
