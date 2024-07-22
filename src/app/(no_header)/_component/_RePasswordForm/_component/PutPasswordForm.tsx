'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdatePasswordMutation } from '@/api/sign/queries';
import ActiveButton from '@/app/_components/ActiveButton';
import LabelInput from '@/app/_components/input/LabelInput';
import { pwInputValidate } from '@/constants/form';
import { pw_regex } from '@/constants/validates';
import { userRegisterStore } from '@/store/userStore';
import { formInputs } from '@/types/user/form';

export default function PutPasswordForm() {
  const router = useRouter();
  const currentUserInfo = userRegisterStore();
  !currentUserInfo.email && router.push('/re-password');
  const { mutate, isPending } = useUpdatePasswordMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();

  const onsubmitHandler: SubmitHandler<formInputs> = async (data) => {
    mutate({
      email: currentUserInfo.email,
      pw: data.pw,
    });
  };

  let errorState = true;
  if (isPending || !pw_regex.value.test(watch('pw'))) {
    errorState = true;
  } else {
    errorState = false;
  }

  return (
    <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col">
      <LabelInput
        inputValidate={pwInputValidate}
        isDisabled={false}
        register={register}
        errorMessage={errors.pw?.message}
        className="mt-9"
      />
      <ActiveButton errorState={errorState} activeClassName="mt-7">
        {isPending ? '재설정중...' : '완료'}
      </ActiveButton>
    </form>
  );
}
