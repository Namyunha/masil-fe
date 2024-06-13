'use client';

import { useParams } from 'next/navigation';

export default function ReviewDetail() {
  const params = useParams();

  const reviewId = params && params.reviewId;

  return <>상세 리뷰: {reviewId}</>;
}
