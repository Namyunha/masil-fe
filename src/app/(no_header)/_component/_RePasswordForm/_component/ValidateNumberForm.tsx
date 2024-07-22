'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ActiveButton from '@/app/_components/ActiveButton';
import ErrorMessage from '@/app/_components/input/ErrorMessage';
import LabelInput from '@/app/_components/input/LabelInput';
import { emailInputValidate } from '@/constants/form';
import { userRegisterStore, validateCondition } from '@/store/userStore';
import { formInputs } from '@/types/user/form';
import Timer from '../../_ValidateForm/_component/Timer';
import AlertModal from '../../AlertModal';

export default function ValidateNumberForm() {
  const [modalOn, setModalOn] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();

  const validateState = validateCondition();
  const currentUserInfo = userRegisterStore();
  const router = useRouter();
  const random = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
  };

  console.log('validateState = ', validateState);

  const onsubmitHandler: SubmitHandler<formInputs> = () => {
    validateState.setConfirmState(true);
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
          <LabelInput
            inputValidate={emailInputValidate}
            inputValue={currentUserInfo.email}
            isDisabled={true}
            register={register}
            className="mb-2"
          />
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
