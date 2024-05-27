import { END_POINT } from '@/constants/api';
import { SignUpReqBodyType } from '@/types/sign';
import { fetcher } from '../fetcher';

export const postSignUp = async ({
  email,
  nickName,
  password,
}: SignUpReqBodyType) => {
  const { data } = await fetcher.post(END_POINT.USER.SIGNUP, {
    email,
    nickName,
    password,
  });

  return data;
};
