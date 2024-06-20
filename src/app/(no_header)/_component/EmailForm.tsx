'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { email_regex } from '@/constants/validates';
import { useModalStore, useValidate } from '@/store/userStore';

type Inputs = {
  email: string;
};

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  console.log(watch('email'));
  // 모달 온, 오프 조절
  const modal = useModalStore();
  // 인증 확인 여부
  const validate = useValidate();
  // 인증번호 받기 여부
  const [validationNum, setValidationNum] = useState('');

  const [duplicateError, setDuplicateError] = useState('');
  // 인증번호 받기시 리랜더링
  useEffect(() => {
    setValidationNum(validate.certification);
  }, [validate.certification]);
  // 이메일 중복체크
  const emailDuplicateCheck = async (email: string) => {
    const result = await (await fetch(`/api/user?email=` + email)).json();
    return result;
  };

  // modal 켜기
  const emailValidate = () => {
    modal.changeStatus();
  };

  const onContinueHandler: SubmitHandler<Inputs> = async (data) => {
    // 중복체크
    const result = await emailDuplicateCheck(data.email);
    if (result.data) {
      setDuplicateError(result.message);
      return;
    }
    setDuplicateError('');
    emailValidate();
  };

  return (
    <>
      <div className="flex flex-col justify-center mt-28">
        <div className="text-20">
          <p className="font-bold">
            로그인에 사용할 <br />
            이메일을 입력해주세요.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onContinueHandler)}
          className="flex flex-col">
          <div className="relative my-9">
            <input
              id="small_filled"
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: {
                  value: email_regex.value,
                  message: email_regex.message,
                },
              })}
              placeholder=" "
              className="peer block rounded-lg px-2.5 pb-1.5 pt-4 w-full border focus:outline-none"
              type="text"
            />
            <label
              htmlFor="small_filled"
              className="absolute text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-3 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:text-gray-300 	peer-focus:scale-75 peer-focus:-translate-y-3">
              이메일 (example@example.com)
            </label>
          </div>
          {errors.email && (
            <p className="text-text_error text-sm font-bold" role="alert">
              {errors.email.message}
            </p>
          )}
          {!errors.email && duplicateError && (
            <p className="text-text_error text-sm font-bold" role="alert">
              {duplicateError}
            </p>
          )}
          <button
            className={clsx(
              'bg-bg_disabled',
              'text-zinc-400',
              'rounded-lg',
              'p-12',
              'font-bold',
              {
                ['mt-4']: errors.email || duplicateError,
                ['bg-primary']: email_regex.value.test(watch('email')),
                ['cursor-not-allowed']: !email_regex.value.test(watch('email')),
              }
            )}>
            인증번호 전송
          </button>
        </form>
      </div>
    </>
  );
}
