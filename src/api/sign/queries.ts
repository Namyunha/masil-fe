import { useMutation } from '@tanstack/react-query';
import { progessCondition } from '@/store/userStore';
import { userData } from '@/types/user';
import { postSignUp } from '.';

export function useSignUpMutation() {
  const progessStatus = progessCondition();
  return useMutation({
    mutationFn: (userData: userData) => postSignUp(userData),
    onSuccess: () => {
      // Memo: 성공할 경우 로직 작성
      console.log('회원가입 성공');
      progessStatus.setProgessCondition(5);
    },
    onError: (error) => {
      // Memo: 실패할 경우 로직 작성
      console.log(error.message);
    },
  });
}
