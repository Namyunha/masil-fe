import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ActiveButton from '@/app/_components/ActiveButton';
import LabelInput from '@/app/_components/input/LabelInput';
import { emailInputValidate } from '@/constants/form';
import { email_regex } from '@/constants/validates';
import { userRegisterStore, validateCondition } from '@/store/userStore';
import { formInputs } from '@/types/user/form';

export default function ValidateEmailForm() {
  const currentUserInfo = userRegisterStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();
  const validateState = validateCondition();
  const random = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
  };

  const emailDuplicateCheck = async (email: string) => {
    const result = await (await fetch(`/api/user?email=` + email)).json();
    console.log('result = ', result);
    if (result.data) {
      return result.message;
    }
    return true;
  };

  const validate = {
    ...emailInputValidate,
    validate: {
      ...emailInputValidate.validate,
      validate: () => emailDuplicateCheck(watch('email')),
    },
  };

  const onContinueHandler: SubmitHandler<formInputs> = async (data) => {
    currentUserInfo.setEmail(data.email);
    onValidateNumHandler();
  };

  const onValidateNumHandler = () => {
    validateState.setValidateNum(random());
  };

  const errorState = email_regex.value.test(watch('email'));
  return (
    <form onSubmit={handleSubmit(onContinueHandler)} className="flex flex-col">
      <LabelInput
        isDisabled={false}
        errorMessage={errors.email?.message}
        inputValidate={validate}
        register={register}
        className="mt-10"
      />
      <ActiveButton activeClassName="mt-5" errorState={!errorState}>
        인증번호 전송
      </ActiveButton>
    </form>
  );
}
