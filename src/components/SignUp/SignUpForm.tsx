'use client';

import { useForm } from 'react-hook-form';
import { useSignUpQuery } from '@/api/sign/queries';
import Button from '../Button';

export default function SignUpForm() {
  const { register, watch, handleSubmit } = useForm();

  const { mutate: onRegister } = useSignUpQuery({
    email: watch('email'),
    nickName: watch('nickName'),
    password: watch('password'),
  });

  return (
    <>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(() => onRegister())}>
        <input {...register('email')} />
        <input {...register('nickName')} />
        <input {...register('password')} />
        <Button type="submit">회원가입</Button>
      </form>
    </>
  );
}
