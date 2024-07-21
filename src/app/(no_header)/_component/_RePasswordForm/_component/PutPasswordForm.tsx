'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdatePasswordMutation } from '@/api/sign/queries';
import ActiveButton from '@/app/_components/ActiveButton';
import ErrorMessage from '@/app/_components/input/ErrorMessage';
import Label from '@/app/_components/input/Label';
import { pw_regex } from '@/constants/validates';
import { userRegisterStore } from '@/store/userStore';

type Inputs = {
  password: string;
};

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
  } = useForm<Inputs>();

  const onsubmitHandler: SubmitHandler<Inputs> = async (data) => {
    mutate({
      email: currentUserInfo.email,
      pw: data.password,
    });
  };

  let errorState = true;
  if (isPending || !pw_regex.value.test(watch('password'))) {
    errorState = true;
  } else {
    errorState = false;
  }

  return (
    <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col">
      <div className="relative mt-9">
        <input
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            pattern: {
              value: pw_regex.value,
              message: pw_regex.message,
            },
          })}
          id="small_filled"
          placeholder=""
          className={clsx(
            'peer block rounded-lg px-12 pt-4 max:pt-3 pb-8 max:pb-6 w-full border-2 focus:outline-none',
            errors.password &&
              'bg-fields_bg_error border border-fields_stroke_error'
          )}
          type="password"
        />
        <Label isDisabled={false} labelName="영문,숫자,특수기호 포함 5~20자" />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>
      <ActiveButton errorState={errorState} activeClassName="mt-7">
        {isPending ? '재설정중...' : '완료'}
      </ActiveButton>
    </form>
  );
}
