// src/utils/prefetchAuthSSR.ts
import { QueryClient } from '@tanstack/react-query';
import { userCheck } from '@/api/sign';

export default async function prefetchAuthSSR(queryClient: QueryClient) {
  await queryClient.prefetchQuery({ queryKey: ['Me'], queryFn: userCheck });
}
