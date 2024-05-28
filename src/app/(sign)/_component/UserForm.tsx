'use client';

import { useForm } from 'react-hook-form';
import { useSignUpMutation } from '@/api/sign/queries';
import Button from '@/components/Button';

export default function SignUpForm() {
  const { register, watch, handleSubmit } = useForm();

  const { mutate: onRegister } = useSignUpMutation();

  const onSubmitHandler = (data) => {
    console.log('data = ', data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmitHandler)}>
        <input className="border-2 border-stroke_grey" {...register('email')} />
        <input
          className="border-2 border-stroke_grey"
          {...register('nickName')}
        />
        <input
          className="border-2 border-stroke_grey"
          {...register('password')}
        />
        <Button type="submit">회원가입</Button>
      </form>
    </>
  );
}
