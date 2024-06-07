import { END_POINT } from '@/constants/api';
import { fetcher } from '../fetcher';

export const postSignUp = async () => {
  const { data } = await fetcher.post(END_POINT.USER.SIGNUP, {});

  return data;
};
