'use client';

import { useForm } from 'react-hook-form';
import { useSignUpQuery } from '@/api/sign/queries';
import useResponsive from '@/hooks/useResponsive';
import Button from '../Button';

export default function ButtonWrapper() {
  const isMobile = useResponsive();

  const { register, watch, handleSubmit } = useForm();

  const { mutate: onRegister } = useSignUpQuery({
    email: watch('email'),
    nickName: watch('nickName'),
    password: watch('password'),
  });

  return (
    <>
      <form onSubmit={handleSubmit(() => onRegister())}>
        <input {...register('email')} />
        <input {...register('nickName')} />
        <input {...register('password')} />
        <Button type="submit">회원가입</Button>
        {isMobile && (
          <Button
            value="취소"
            onClick={() => {
              console.log('취소');
            }}
          />
        )}
      </form>
    </>
  );
}
