import { useMutation } from '@tanstack/react-query';
import { SignUpType } from '@/types/sign';
import { signUp } from '.';

export function useSignUpQuery({ email, nickName, password }: SignUpType) {
  return useMutation({
    mutationFn: () =>
      signUp({
        email,
        nickName,
        password,
      }),
    onSuccess: () => {
      console.log('회원가입 성공');
    },
    onError: () => {
      console.log('회원가입 실패');
    },
  });
}
