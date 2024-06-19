'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Icon from '@/components/Icon';
import { ROUTE_PATH } from '@/constants/route';
import { email_regex } from '@/constants/validates';
import { useModalStore, useValidate } from '@/store/userStore';

type Inputs = {
  email: string;
};

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

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
    <div className="h-dvh w-dvw px-10 py-10 flex flex-col justify-between">
      <div className="flex justify-end">
        <Icon className="cursor-pointer opacity-50" name="close" size={24} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <Icon name="register_logo" size={160} />
        </div>
        <div className="my-10 text-20">
          <p className="text-center font-bold">
            이메일 주소로 10초만에 가입해
            <span className="inline-flex items-center align-middle">
              <Icon name="logo_secondary" size={32} className="mx-1" />
              <span className="font-bold">을 시작하세요</span>
            </span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onContinueHandler)}
          className="flex flex-col">
          <input
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: email_regex.value,
                message: email_regex.message,
              },
            })}
            placeholder="이메일 (example@example.com)"
            className="border text-text_grey mb-2 rounded-md p-12"
            type="text"
          />
          {errors.email && (
            <p className="text-text_error text-sm font-bold" role="alert">
              {errors.email.message}
            </p>
          )}
          {duplicateError && (
            <p className="text-text_error text-sm font-bold" role="alert">
              {duplicateError}
            </p>
          )}
          <button
            className={clsx(
              'bg-primary',
              'text-text_white',
              'rounded-lg',
              'p-12',
              'font-bold',
              { ['mt-4']: errors.email || duplicateError }
            )}>
            계속하기
          </button>
        </form>
      </div>
      <div className="text-center mt-10">
        <span className="text-xs mr-1">이미 마실 회원이세요?</span>
        <Link className="font-black text-sm" href={ROUTE_PATH.SIGNIN}>
          로그인 하기
        </Link>
      </div>
    </div>
  );
}
