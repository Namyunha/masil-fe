import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { progressCondition } from '@/store/userStore';
import { userData } from '@/types/user';
import { postSignUp, updatePassword } from '.';

export function useSignUpMutation() {
  const progressStatus = progressCondition();
  return useMutation({
    mutationFn: (userData: userData) => postSignUp(userData),
    onSuccess: () => {
      progressStatus.setProgressCondition(5);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}

export function useUpdatePasswordMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: (userData: Pick<userData, 'email' | 'pw'>) =>
      updatePassword(userData),
    onSuccess: (data) => {
      router.push('/re-password/complete');
      return data;
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}
