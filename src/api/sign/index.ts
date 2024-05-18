import { END_POINT } from '@/constants/api';
import { SignUpType } from '@/types/sign';
import { fetcher } from '../fetcher';

export const signUp = async ({ email, nickName, password }: SignUpType) => {
  return await fetcher({
    endPoint: END_POINT.AUTH.SIGNUP,
    method: 'POST',
    body: JSON.stringify({
      email,
      nickName,
      password,
    }),
  });
};
