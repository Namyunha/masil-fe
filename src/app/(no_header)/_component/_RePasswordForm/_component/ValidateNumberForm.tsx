'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ActiveButton from '@/app/_components/ActiveButton';
import { userRegisterStore, validateCondition } from '@/store/userStore';
import Timer from '../../_ValidateForm/_component/Timer';
import AlertModal from '../../AlertModal';
import ErrorMessage from '../../ErrorMessage';

type Inputs = {
  validateNum: string;
};

export default function ValidateNumberForm() {
  // const [errorState, setErrorState] = useState(true);
  const [modalOn, setModalOn] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const validateState = validateCondition();
  const currentUserInfo = userRegisterStore();
  const router = useRouter();
  const random = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
  };

  const onsubmitHandler: SubmitHandler<Inputs> = () => {
    router.push('/re-password/put');
  };

  let errorState = true;
  errorState =
    watch('validateNum') && watch('validateNum').length === 6 ? false : true;

  const resendValidateNum = () => {
    validateState.setValidateNum(random());
    setModalOn(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col">
        <div className="flex flex-col mt-10">
          <div className="relative mb-2">
            <input
              disabled
              id="small_filled"
              placeholder={currentUserInfo.email}
              className="peer block rounded-lg px-12 pt-4 pb-8 w-full border focus:outline-none"
              type="text"
            />
            <label
              htmlFor="small_filled"
              className="absolute text-zinc-300 -translate-y-3 scale-75 top-4 z-10 origin-[0] start-3">
              이메일 (example@example.com)
            </label>
          </div>
          <div className="relative">
            <Timer />
            <input
              disabled={validateState.confirmState}
              className={clsx(
                'w-full border rounded-lg p-12',
                validateState.confirmState && 'cursor-not-allowed text-zinc-300'
              )}
              type="text"
              placeholder="인증번호를 입력해주세요"
              value={
                validateState.confirmState
                  ? validateState.validateNum
                  : watch('validateNum')
              }
              {...register('validateNum', {
                required: '인증번호를 입력 해주세요',
                validate: (value) => {
                  return (
                    validateState.validateNum === value ||
                    '인증번호를 다시 확인해주세요'
                  );
                },
              })}
            />
          </div>
          {errors.validateNum && (
            <ErrorMessage message={errors.validateNum.message} />
          )}
        </div>
        <ActiveButton activeClassName="mt-7" errorState={errorState}>
          비밀번호 재설정
        </ActiveButton>
      </form>
      <div className="flex justify-center mt-5 text-text_light_grey">
        <span className="cursor-pointer" onClick={resendValidateNum}>
          인증번호 재전송
        </span>
      </div>

      {modalOn && <AlertModal setModalOn={setModalOn} />}
    </>
  );
}
