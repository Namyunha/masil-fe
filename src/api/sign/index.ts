import { END_POINT } from '@/constants/api';
import { userData } from '@/types/user';
import { fetcher } from '../fetcher';

export const postSignUp = async (userData: userData) => {
  const { data } = await fetcher.post(END_POINT.USER.SIGNUP, userData);
  return data;
};

export const updatePassword = async (
  userData: Pick<userData, 'email' | 'pw'>
) => {
  const { data } = await fetcher.patch(END_POINT.USER.UPDATEPW, userData);
  return data;
};

export const userCheck = async () => {
  const { data } = await fetcher.get(`${END_POINT.USER.USERINFO}`);
  return data;
};
