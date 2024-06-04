'use client';

import clsx from 'clsx';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { id_regex, pw_regex } from '@/constants/validates';
import useCheck from '@/hooks/useCheck';
import { useRegisterStore, userInfo, useValidate } from '@/store/userStore';

export default function UserInfoForm() {
  const { check1, check2, check3, setCheckType } = useCheck();
  const { register, handleSubmit } = useForm<userInfo>();
  const currentUserInfo = useRegisterStore();
  const validate = useValidate();
  const onSubmit: SubmitHandler<userInfo> = (data) => {
    console.log('data = ', data);
    setCheckType('reset');
    currentUserInfo.setUserInfo(data);
    validate.setNextCheck();
  };

  console.log('check1 = ', check1, 'check2 = ', check2, 'check3 = ', check3);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mt-48 gap-48">
        <div className="w-72 font-sans text-24 text-center">
          계정을 만드세요
        </div>
        <div className="flex flex-col justify-center w-72">
          <input
            {...register('id', {
              required: 'ID를 입력해주세요',
              onBlur: (e) => {
                {
                  console.log('이메일 인증:', e.target.value);
                  id_regex.value.test(e.target.value)
                    ? setCheckType('check1', true)
                    : setCheckType('check1', false);
                }
              },
            })}
            className="w-full bg-gray rounded-lg p-16"
            type="text"
            placeholder="ID를 입력하세요"
          />
          {check1 === false && (
            <span className="text-text_error font-semibold">
              {id_regex.message}
            </span>
          )}
        </div>
        <div className="justify-center w-72">
          <input
            type="password"
            {...register('pw', {
              required: 'PW를 입력해주세요',
              onBlur: (e) => {
                console.log('비밀번호 인증:', e.target.value);
                {
                  pw_regex.value.test(e.target.value)
                    ? setCheckType('check2', true)
                    : setCheckType('check2', false);
                }
              },
            })}
            className="w-full bg-gray  rounded-lg p-16"
            placeholder="PW를 입력하세요"
          />
          {check2 === false && (
            <span className="text-text_error font-semibold">
              {pw_regex.message}
            </span>
          )}
        </div>
        <div className="justify-center w-72">
          <input
            {...register('nickName', {
              required: '닉네임을 입력해주세요',
              onBlur: (e) => {
                console.log('닉네임 인증:', e.target.value);
                {
                  e.target.value.length > 0
                    ? setCheckType('check3', true)
                    : setCheckType('check3', false);
                }
              },
            })}
            className="w-full bg-gray  rounded-lg p-16"
            type="text"
            placeholder="닉네임을 입력하세요"
          />
          {check3 === false && (
            <span className="text-text_error font-semibold">
              닉네임을 입력해주세요
            </span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            disabled={!(check1 && check2 && check3)}
            className={clsx(
              'mt-28',
              'w-72',
              'font-semibold',
              'text-white',
              'rounded-lg',
              'p-16',
              'bg-gray',
              {
                ['bg-orange']: check1 && check2 && check3,
                ['cursor-not-allowed']: !(check1 && check2 && check3),
              }
            )}>
            다음으로
          </button>
        </div>
      </form>
    </>
  );
}
