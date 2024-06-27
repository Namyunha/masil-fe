'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Icon from '@/components/Icon';
import { progessCondition, useRegisterStore } from '@/store/userStore';
import ErrorMessage from '../ErrorMessage';
import LabelName from '../LabelInput';
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
  const progessStatus = progessCondition();
  const currentUserInfo = useRegisterStore();

  const nickNameDuplicateCheck = async (nickName: string) => {
    const result = await (await fetch(`/api/user?nickName=` + nickName)).json();
    if (result.data) {
      setDuplicateErrorMessage(result.message);
    }
    return result;
  };

  const onsubmitHandler: SubmitHandler<Inputs> = async (data) => {
    const result = await nickNameDuplicateCheck(data.nickName);
    if (!result.data) {
      // progessStatus.setProgessCondition(5);
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: currentUserInfo.email,
          pw: currentUserInfo.userInfo.pw,
          nickName: data.nickName,
          profileImg: currentUserInfo.profileImg,
        }),
      });
      if (response.ok) {
        progessStatus.setProgessCondition(5);
      }
    }
  };

  useEffect(() => {
    watch('nickName') && currentUserInfo.profileImg
      ? setErrorState(false)
      : setErrorState(true);
  }, [currentUserInfo, watch('nickName')]);

  return (
    <div className="flex flex-col mt-20">
      <div className="text-20">
        <p className="font-bold">
          마실에서 사용할 <br />
          닉네임과 프로필을 정해주세요
        </p>
      </div>
      <form onSubmit={handleSubmit(onsubmitHandler)} className="flex flex-col">
        <div className="relative mb-5 mt-3">
          <input
            id="small_filled"
            placeholder=""
            className={clsx(
              'peer',
              'block',
              'rounded-lg',
              'px-12',
              'pt-4',
              'pb-8',
              'w-full',
              'border-2',
              'focus:outline-none',
              'border-fields_stroke'
            )}
            type="text"
            {...register('nickName', {
              required: '닉네임을 입력해주세요',
              maxLength: { value: 20, message: '1~20자 사이로 입력해주세요' },
            })}
          />
          <LabelName labelName="닉네임(1~20 한,영,특수기호) " />
          {errors.nickName && (
            <ErrorMessage message={errors.nickName.message} />
          )}
          {!errors.nickName && duplicateErrorMessage && (
            <ErrorMessage message={duplicateErrorMessage} />
          )}
        </div>
        <div className="relative overflow-scroll h-60 mb-5">
          <div className="grid gap-4 grid-cols-3 grid-rows-3 pt-3 pb-10">
            {Array.from({ length: 21 }).map((_, index) => (
              <div key={index} className="flex justify-center relative">
                <span
                  className={clsx('relative', {
                    'border-solid border-4 border-stroke_focused rounded-full':
                      currentUserInfo.profileImg === `user${index}`,
                  })}
                  onClick={() => currentUserInfo.setprofileImg(`user${index}`)}>
                  <Icon key={index} name={'user' + index} size={60} />
                </span>
              </div>
            ))}
          </div>
        </div>
        <PassButton label={'완료'} errorState={errorState} />
      </form>
    </div>
  );
}
