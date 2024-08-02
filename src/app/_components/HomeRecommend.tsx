'use client';

import { QueryClient, useQuery } from '@tanstack/react-query';
import { userCheck } from '@/api/sign';
import prefetchAuthSSR from '@/utils/prefetchAuthSSR';
import RecommendedCafeCarousel from './recommend/RecommendedCafeCarousel';

export default function HomeRecommend() {
  const queryClient = new QueryClient();
  prefetchAuthSSR(queryClient);
  const { data } = useQuery({
    queryKey: ['Me'],
    queryFn: userCheck,
  });
  return (
    <section className="flex flex-col gap-16">
      <h2 className="text-18 font-bold">
        {data?.data.nickName} 님이 좋아할 카페
      </h2>
      <RecommendedCafeCarousel />
    </section>
  );
}
