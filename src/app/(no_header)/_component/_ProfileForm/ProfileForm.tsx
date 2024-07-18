'use client';

import clsx from 'clsx';
import * as icons from 'public/icon/svg';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignUpMutation } from '@/api/sign/queries';
import ErrorMessage from '@/app/_components/input/ErrorMessage';
import Label from '@/app/_components/input/Label';
import Icon from '@/components/Icon';
import LoadingSpinner from '@/components/LoadingSpinner';
import {
  progressCondition,
  userRegisterStore,
  validateCondition,
} from '@/store/userStore';
import PassButton from '../PassButton';

type Inputs = {
  nickName: string;
};

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [errorState, setErrorState] = useState(true);
  const [duplicateErrorMessage, setDuplicateErrorMessage] = useState('');
  const validateState = validateCondition();
  const userInfoState = userRegisterStore();
  const ProgressState = progressCondition();

  const nickNameDuplicateCheck = async (nickName: string) => {
    const result = await (await fetch(`/api/user?nickName=` + nickName)).json();
    if (result.data) {
      setDuplicateErrorMessage(result.message);
    }
    return result;
  };

  const mutation = useSignUpMutation();

  const OnsubmitHandler: SubmitHandler<Inputs> = async (data) => {
    if (!userInfoState.email || !validateState.confirmState) {
      ProgressState.setProgressCondition(1);
      return;
    }
    if (!validateState.agreement) {
      ProgressState.setProgressCondition(2);
      return;
    }
    if (!userInfoState.userInfo.pw) {
      ProgressState.setProgressCondition(3);
      return;
    }
    const result = await nickNameDuplicateCheck(data.nickName);
    if (result.data) return;
    mutation.mutate({
      email: userInfoState.email,
      pw: userInfoState.userInfo.pw,
      nickName: data.nickName,
      profileImg: userInfoState.profileImg,
    });
  };

  useEffect(() => {
    watch('nickName') ? setErrorState(false) : setErrorState(true);
  }, [userInfoState, watch('nickName')]);

  return (
    <div className="flex flex-col">
      <div className="max:text-16 text-20">
        <p className="font-bold">
          마실에서 사용할 <br />
          닉네임과 프로필을 정해주세요
        </p>
      </div>
      <form onSubmit={handleSubmit(OnsubmitHandler)} className="flex flex-col">
        <div className="relative mb-5 mt-3">
          <input
            {...register('nickName', {
              required: '닉네임을 입력해주세요',
              maxLength: { value: 20, message: '1~20자 사이로 입력해주세요' },
            })}
            id="small_filled"
            placeholder=""
            className={clsx(
              'peer block rounded-lg px-12 pt-4 max:pt-3 pb-8 max:pb-6 w-full border-2 focus:outline-none',
              errors.nickName &&
                'bg-fields_bg_error border border-fields_stroke_error'
            )}
            type="text"
          />
          <Label labelName="닉네임(1~20 한,영,특수기호)" isDisabled={false} />
          {errors.nickName && (
            <ErrorMessage message={errors.nickName.message} />
          )}
          {!errors.nickName && duplicateErrorMessage && (
            <ErrorMessage message={duplicateErrorMessage} />
          )}
        </div>
        <div className="relative overflow-scroll h-[310px] max:h-72">
          <div className="grid gap-4 grid-cols-3 grid-rows-3 pt-3 pb-10">
            {Array.from({ length: 21 }).map((_, index) => (
              <div key={index} className="flex justify-center relative">
                <span
                  className={clsx('relative', {
                    'border-solid border-4 border-stroke_focused rounded-full':
                      userInfoState.profileImg === `user${index}`,
                  })}
                  onClick={() => userInfoState.setProfileImg(`user${index}`)}>
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
        <PassButton errorState={errorState}>
          {mutation.isPending ? <LoadingSpinner /> : '완료'}
        </PassButton>
      </form>
    </div>
  );
}
