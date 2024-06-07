import { useMutation } from '@tanstack/react-query';
import { postSignUp } from '.';

export function useSignUpMutation() {
  return useMutation({
    mutationFn: () => postSignUp(),
    onSuccess: () => {
      // Memo: 성공할 경우 로직 작성
      console.log('회원가입 성공');
    },
    onError: (error) => {
      // Memo: 실패할 경우 로직 작성
      console.log(error.message);
    },
  });
}
