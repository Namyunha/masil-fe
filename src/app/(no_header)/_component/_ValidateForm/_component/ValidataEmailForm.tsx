import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { email_regex } from '@/constants/validates';
import { userRegisterStore, validateCondition } from '@/store/userStore';
import ErrorMessage from '../../ErrorMessage';
import Label from '../../Label';
import PassButton from '../../PassButton';

type Inputs = {
  email: string;
  vNum: string;
};

export default function ValidateEmailForm() {
  const [errorState, setErrorState] = useState(true);
  const currentUserInfo = userRegisterStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const validateState = validateCondition();
  const random = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
  };
  // 중복체크 에러 결과
  const [duplicateError, setDuplicateError] = useState('');
  const emailDuplicateCheck = async (email: string) => {
    const result = await (await fetch(`/api/user?email=` + email)).json();
    return result;
  };

  const onContinueHandler: SubmitHandler<Inputs> = async (data) => {
    // 중복체크
    const result = await emailDuplicateCheck(data.email);
    if (result.data) {
      setDuplicateError(result.message);
      return;
    }
    currentUserInfo.setEmail(data.email);
    onValidateNumHandler();
    setDuplicateError('');
  };

  const onValidateNumHandler = () => {
    validateState.setValidateNum(random());
  };

  useEffect(() => {
    email_regex.value.test(watch('email'))
      ? setErrorState(false)
      : setErrorState(true);
  }, [watch('email')]);
  return (
    <form onSubmit={handleSubmit(onContinueHandler)} className="flex flex-col">
      <div className="relative mt-5 mb-4">
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
          className={clsx(
            'peer block rounded-lg px-12 pt-4 pb-8 w-full border-2 focus:outline-none',
            duplicateError
              ? 'bg-fields_bg_error border-fields_stroke_error'
              : 'border-fields_stroke'
          )}
          type="text"
        />
        <Label labelName="이메일 (example@example.com)" />
        {errors.email && <ErrorMessage message={errors.email.message} />}
        {!errors.email && duplicateError && (
          <ErrorMessage message={duplicateError} />
        )}
      </div>
      <PassButton errorState={errorState}>{'인증번호 전송'}</PassButton>
    </form>
  );
}
