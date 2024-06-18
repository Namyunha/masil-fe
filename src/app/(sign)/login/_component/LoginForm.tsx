'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  id: string;
  pw: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onLoginHandler = async (data: Inputs) => {
    setIsLoading(true);
    const result = await (
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
    ).json();
    // console.log('Current Time = ', new Date(Date.now() + 60 * 60 * 1000));
    Cookies.set('currentUser', result.accessToken, {
      secure: true,
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });
    router.push('/');
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onLoginHandler)}
      className="flex flex-col items-center mt-48 gap-48">
      <div className="flex flex-col justify-center w-72">
        <input
          {...register('id', { required: '아이디를 입력해주세요' })}
          className="w-full bg-gray  rounded-lg p-16"
          type="text"
          placeholder="아이디를 입력해주세요"
        />
        {errors && errors.id?.message}
      </div>
      <div className="justify-center w-72">
        <input
          {...register('pw', { required: '비밀번호를 입력해주세요' })}
          className="w-full bg-gray  rounded-lg p-16"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        {errors && errors.pw?.message}
      </div>
      <div className="flex justify-center">
        <button
          disabled={isLoading}
          className="mt-28
            w-72
            font-semibold
            text-white
            rounded-lg
            p-16
            bg-gray">
          {!isLoading ? '로그인' : '로그인중...'}
        </button>
      </div>
    </form>
  );
}
