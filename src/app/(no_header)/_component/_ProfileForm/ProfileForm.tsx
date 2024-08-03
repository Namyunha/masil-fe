'use client';

import clsx from 'clsx';
import * as icons from 'public/icon/svg';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignUpMutation } from '@/api/sign/queries';
import ActiveButton from '@/app/_components/ActiveButton';
import LabelInput from '@/app/_components/input/LabelInput';
import SignHeader from '@/app/_components/sign/Header';
import Icon from '@/components/Icon/Icon';
import { nickNameInputValidate } from '@/constants/form';
import {
  progressCondition,
  userRegisterStore,
  validateCondition,
} from '@/store/userStore';
import { formInputs } from '@/types/user/form';

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();

  useEffect(() => {
    userInfoState.setUserInfo({
      ...userInfoState.userInfo,
      nickName: watch('nickName'),
    });
  }, [watch('nickName')]);

  const validateState = validateCondition();
  const userInfoState = userRegisterStore();
  const ProgressState = progressCondition();

  const nickNameDuplicateCheck = async (nickName: string) => {
    const result = await (await fetch(`/api/user?nickName=` + nickName)).json();
    if (result.data) {
      return result.message;
    }
    return true;
  };

  const mutation = useSignUpMutation();

  const OnsubmitHandler: SubmitHandler<formInputs> = async (data) => {
    userInfoState.setUserInfo({
      nickName: data.nickName,
      profileImg: userInfoState.userInfo.profileImg,
    });
    if (!userInfoState.email || !validateState.confirmState) {
      ProgressState.setProgressCondition(1);
      return;
    }
    if (!validateState.agreement) {
      ProgressState.setProgressCondition(2);
      return;
    }
    if (!userInfoState.pw) {
      ProgressState.setProgressCondition(3);
      return;
    }
    const result = await nickNameDuplicateCheck(data.nickName);
    if (result.data) return;
    mutation.mutate({
      email: userInfoState.email,
      pw: userInfoState.pw,
      nickName: data.nickName,
      profileImg: userInfoState.userInfo.profileImg,
    });
  };

  const validate = {
    ...nickNameInputValidate,
    validate: {
      ...nickNameInputValidate.validate,
      validate: () => nickNameDuplicateCheck(watch('nickName')),
    },
  };

  const errorCondition = !(
    watch('nickName') && userInfoState.userInfo.profileImg
  );

  return (
    <div className="flex flex-col">
      <SignHeader>
        마실에서 사용할 <br />
        닉네임과 프로필을 정해주세요
      </SignHeader>
      <form onSubmit={handleSubmit(OnsubmitHandler)} className="flex flex-col">
        <LabelInput
          isDisabled={false}
          inputValidate={validate}
          register={register}
          errorMessage={errors.nickName?.message}
          className={'mb-5 mt-3'}
          inputValue={userInfoState.userInfo.nickName}
        />
        <div className="relative mb-5 h-[310px] max:h-72 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-primary scrollbar-track-bg_white">
          <div className="grid gap-4 grid-cols-3 grid-rows-3 pt-3 pb-10 ">
            {Array.from({ length: 21 }).map((_, index) => (
              <div key={index} className="flex justify-center relative">
                <span
                  className={clsx('relative', {
                    'border-solid border-4 border-stroke_focused rounded-full':
                      userInfoState.userInfo.profileImg === `user${index}`,
                  })}
                  onClick={() =>
                    userInfoState.setUserInfo({
                      ...userInfoState.userInfo,
                      profileImg: `user${index}`,
                    })
                  }>
                  <Icon
                    key={index}
                    name={`user${index}` as keyof typeof icons}
                    size={65}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
        <ActiveButton errorState={errorCondition}>완료</ActiveButton>
      </form>
    </div>
  );
}
