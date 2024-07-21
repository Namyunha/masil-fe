import React from 'react';
import { useForm } from 'react-hook-form';
import ActiveButton from '@/app/_components/ActiveButton';
import LabelInput from '@/app/_components/input/LabelInput';
import { emailInputValidate, nickNameInputValidate } from '@/constants/form';
import { formInputs } from '@/types/user/form';
import ProfileImg from './_ProfileForm/ProfileImg';

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<formInputs>();
  const onSubmitHandler = (data: formInputs) => {};

  return (
    <form
      className="w-full h-[90%] p-5 flex flex-col box-border justify-between"
      onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="h-2/3 flex flex-col justify-center gap-10">
        <div className="flex justify-center">
          <ProfileImg watch={watch} register={register} />
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <span className="text-text_light_grey inline-block mb-1">
              이메일
            </span>
            <LabelInput
              inputValidate={emailInputValidate}
              register={register}
              isDisabled={true}
              errorMessage={errors.email?.message}
              inputValue="berry@naver.com"
            />
          </div>
          <div>
            <span className="font-bold inline-block mb-1">닉네임*</span>
            <LabelInput
              inputValidate={nickNameInputValidate}
              register={register}
              isDisabled={false}
              errorMessage={errors.nickName?.message}
              inputValue=""
            />
          </div>
        </div>
      </div>
      <ActiveButton errorState={!(watch('img') && watch('nickName'))}>
        완료
      </ActiveButton>
    </form>
  );
}
