import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  progessCondition,
  useRegisterStore,
  validateCondition,
} from '@/store/userStore';
import AlertModal from '../../AlertModal';
import ErrorMessage from '../../ErrorMessage';
import PassButton from '../../PassButton';
import Timer from './Timer';

type Inputs = {
  validateNum: string;
};

export default function ValidateNumberForm() {
  const [errorState, setErrorState] = useState(true);
  const [modalOn, setModalOn] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const progessStatus = progessCondition();
  const validateState = validateCondition();
  const currentUserInfo = useRegisterStore();

  const random = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
  };

  const onsubmitHandler: SubmitHandler<Inputs> = async () => {
    progessStatus.setProgessCondition(2);
    validateState.setValidateState(true);
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
        <div className="flex flex-col mt-5 mb-4">
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
          <div className="mb-4 relative">
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
        <PassButton label={'다음'} errorState={errorState} />
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
