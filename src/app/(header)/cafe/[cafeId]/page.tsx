'use client';

import { useParams } from 'next/navigation';

export default function CafeDetail() {
  const params = useParams();

  const cafeId = params && params.cafeId;

  return <>상세 카페: {cafeId}</>;
}
