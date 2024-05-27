'use client';

// Memo: 데이터 확인용 임시 구현
import { useEffect } from 'react';
import { useReviewListQuery } from '@/api/review/queries';

export default function Home() {
  const { data } = useReviewListQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <>home</>;
}
