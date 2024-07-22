'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ActiveButton from '@/app/_components/ActiveButton';
import ErrorMessage from '@/app/_components/input/ErrorMessage';
import LabelInput from '@/app/_components/input/LabelInput';
import { emailInputValidate, pwInputValidate } from '@/constants/form';
import { email_regex, pw_regex } from '@/constants/validates';
import { formInputs } from '@/types/user/form';

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm<formInputs>();
  const [errorMessage, setErrorMessage] = useState('');
  const errorState = !(
    email_regex.value.test(watch('email')) && pw_regex.value.test(watch('pw'))
  );

  const onLoginHandler = async (data: formInputs) => {
    setIsLoading(true);
    console.log('data = ', data);
    const result = await (
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
    ).json();
    if (result.status === 405) {
      setErrorMessage(result.message);
    } else {
      setErrorMessage('');
      Cookies.set('accessToken', result.accessToken, {
        secure: true,
        expires: new Date(Date.now() + 60 * 60 * 1000),
      });
      router.push('/');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onLoginHandler)}>
        <div className="flex flex-col mt-10">
          <LabelInput
            register={register}
            inputValidate={emailInputValidate}
            className="mb-3"
            isDisabled={false}
          />
          <LabelInput
            register={register}
            inputValidate={pwInputValidate}
            isDisabled={false}
          />
          {errorMessage && <ErrorMessage message={errorMessage} />}

          <div className="mt-5">
            <ActiveButton errorState={errorState} isLoading={isLoading}>
              로그인
            </ActiveButton>
          </div>
          <div className="flex justify-center mt-5 text-text_light_grey">
            <span
              onClick={() => router.push('re-password')}
              className="cursor-pointer">
              비밀번호 찾을래요
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
