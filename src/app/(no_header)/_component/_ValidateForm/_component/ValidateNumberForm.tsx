import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ActiveButton from '@/app/_components/ActiveButton';
import ErrorMessage from '@/app/_components/input/ErrorMessage';
import LabelInput from '@/app/_components/input/LabelInput';
import { emailInputValidate } from '@/constants/form';
import {
  progressCondition,
  userRegisterStore,
  validateCondition,
} from '@/store/userStore';
import { formInputs } from '@/types/user/form';
import AlertModal from '../../AlertModal';
import Timer from './Timer';

export default function ValidateNumberForm() {
  const [errorState, setErrorState] = useState(true);
  const [modalOn, setModalOn] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();
  const progressStatus = progressCondition();
  const validateState = validateCondition();
  const currentUserInfo = userRegisterStore();

  const random = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
  };

  const onsubmitHandler: SubmitHandler<formInputs> = async () => {
    progressStatus.setProgressCondition(2);
    validateState.setConfirmState(true);
    validateState.setValidateStatus();
  };
  // 인증번호 입력 상태에 따른 에러 메시지 업데이트
  useEffect(() => {
    watch('validateNum') && watch('validateNum').length === 6
      ? setErrorState(false)
      : setErrorState(true);
  }, [watch('validateNum'), validateState]);

  const resendValidateNum = () => {
    validateState.setValidateNum(random());
    setModalOn(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col">
        <div className="relative flex flex-col mt-10">
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
        </div>
        {errors.validateNum && (
          <ErrorMessage message={errors.validateNum.message} />
        )}
        <ActiveButton activeClassName="mt-5" errorState={errorState}>
          다음
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
