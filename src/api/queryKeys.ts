import { createQueryKeys } from '@lukemorales/query-key-factory';

export const userKeys = createQueryKeys('user', {
  userInfo: (id: number) => ({ queryKey: ['userInfo', id] }),
});
