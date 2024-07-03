import { END_POINT } from '@/constants/api';
import { userData } from '@/types/user';
import { fetcher } from '../fetcher';

export const postSignUp = async (userData: userData) => {
  const { data } = await fetcher.post(END_POINT.USER.SIGNUP, userData);

  return data;
};
