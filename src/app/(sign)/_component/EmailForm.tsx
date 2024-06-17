'use client';

import clsx from 'clsx';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { email_regex } from '@/constants/validates';
import {
  useModalStore,
  useRegisterStore,
  useValidate,
} from '@/store/userStore';

export default function EmailForm() {
  // 모달 온, 오프 조절
  const modal = useModalStore();
  // 인증 확인 여부
  const validate = useValidate();
  // 유저정보 (이메일) 저장
  const userInfo = useRegisterStore();
  // 이메일 입력
  const [email, setEmail] = useState<string>();
  // 인증번호 받기 여부
  const [validationNum, setValidationNum] = useState<string>();
  // 인증번호 입력
  const [certification, setCertification] = useState<string>();
  // 이메일 입력후 모달 띄울 때, 포커스 없애기
  const emailInputRef = useRef<HTMLInputElement>(null);
  //  에러 문자 남기기
  const [errorMessage, setErrorMessage] = useState('');
  // 인증번호 받기시 리랜더링
  useEffect(() => {
    setValidationNum(validate.certification);
  }, [validate.certification]);

  // 이메일 중복체크
  const emailDuplicateCheck = async () => {
    const result = await (await fetch(`/api/user?email=` + email)).json();
    return result;
  };
  // 이메일 사용가능 여부 체크
  const emailCheck = async () => {
    if (!email) {
      setErrorMessage('이메일을 입력해주세요');
      return false;
    }
    if (!email_regex.value.test(email)) {
      setErrorMessage(email_regex.message);
      return false;
    }
    const result = await emailDuplicateCheck();
    if (result.data) {
      setErrorMessage(result.message);
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };
  // modal 켜기
  const emailValidate = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (await emailCheck()) {
        modal.changeStatus();
        emailInputRef?.current?.blur();
      }
    }
  };
  // 인증번호 체크
  const checkCertifiHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!certification) {
        setErrorMessage('인증번호를 입력해주세요');
        return;
      }
      if (certification === validate.certification) {
        userInfo.setAgree();
      } else {
        setErrorMessage('인증번호가 일치하지 않습니다.');
      }
    }
  };

  return (
    <>
      <div className="w-72 font-sans text-24 text-center">
        이메일 주소로 10초만에 가입해 마실을 시작하세요
      </div>

      <div className="flex justify-center w-72">
        <input
          disabled={validate.certification.length > 0}
          ref={emailInputRef}
          onKeyDown={emailValidate}
          onChange={(e) => setEmail(e.target.value)}
          className={clsx('w-full', 'bg-gray', 'rounded-lg', 'p-16', {
            ['cursor-not-allowed']: validate.certification.length > 0,
            ['opacity-60']: validate.certification.length > 0,
          })}
          type="text"
        />
      </div>

      <div
        className={clsx('justify-center', 'w-72', {
          ['hidden']: validationNum?.length === 0,
        })}>
        <input
          className="w-full bg-gray  rounded-lg p-16"
          type="text"
          placeholder="인증번호를 입력해주세요"
          onChange={(e) => setCertification(e.target.value)}
          onKeyDown={checkCertifiHandler}
        />
      </div>

      <div className="flex justify-center w-72">
        <span
          className={clsx('text-text_error', 'font-semibold', {
            ['hidden']: !errorMessage,
          })}>
          {errorMessage && errorMessage}
        </span>
      </div>
    </>
  );
}
