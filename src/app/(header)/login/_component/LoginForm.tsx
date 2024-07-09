'use client';
import { cva } from 'class-variance-authority';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/app/(no_header)/_component/ErrorMessage';
import Label from '@/app/(no_header)/_component/Label';
import Button from '@/components/Button';
import { email_regex, pw_regex } from '@/constants/validates';
import { cn } from '@/utils/className';

type Inputs = {
  email: string;
  pw: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [errorMessage, setErrorMessage] = useState('');
  const errorState = !(
    email_regex.value.test(watch('email')) && pw_regex.value.test(watch('pw'))
  );
  const activateButtonVariants = cva(``, {
    variants: {
      variant: {
        primary:
          'w-full bg-button_bg_default hover:bg-button_bg_clicked disabled:bg-button_bg_disabled text-button_text_default hover:text-button_text_clicked disabled:text-button_text_disabled',
        gray: 'w-full bg-button_bg_disabled border border-fields_stroke text-button_text_disabled',
      },
    },
    defaultVariants: {
      variant: 'gray',
    },
  });

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
    // router.push('/');
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onLoginHandler)}>
        <div className="flex flex-col mt-10">
          <div className="relative mb-2">
            <input
              id="small_filled"
              {...register('email', { required: true })}
              placeholder=""
              className="peer block rounded-lg px-12 pt-4 pb-8 w-full border focus:outline-none"
              type="text"
            />
            <Label labelName="이메일 (masil@naver.com)" />
          </div>
          <div className="relative mb-2">
            <input
              id="small_filled"
              {...register('pw', { required: true })}
              placeholder=""
              className="peer block rounded-lg px-12 pt-4 pb-8 w-full border focus:outline-none"
              type="password"
            />
            <Label
              filled="pw_small_filed"
              labelName="비밀번호 (5~20자 영문,숫자,특수기호)"
            />
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>

          <div className="mt-5">
            <Button
              disabled={errorState}
              type="submit"
              className={cn(
                activateButtonVariants({
                  variant: errorState ? 'gray' : 'primary',
                })
              )}
              size="m"
              text={!isLoading ? '로그인' : '로그인중...'}
            />
          </div>
          <div className="flex justify-center mt-5 text-text_light_grey">
            <span className="cursor-pointer">비밀번호 찾을래요</span>
          </div>
        </div>
      </form>
    </div>
  );
}
