'use client';

import clsx from 'clsx';
import React, {
  KeyboardEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useModalStore, useValidate } from '@/store/store';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const modal = useModalStore();
  const [email, setEmail] = useState<string>('');
  const emailInputRef = useRef<RefObject<HTMLInputElement>>(null);
  const validate = useValidate();
  const [emailNum, setEmailNum] = useState<string>('');

  useEffect(() => {
    setEmailNum(validate.certification);
  }, [validate.certification]);

  console.log('emailNum = ', emailNum);

  const emailValidate = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      modal.changeStatus();
      emailInputRef.current.blur();
    }
  };

  return (
    <>
      <div className="w-72 font-sans text-24 text-center">
        이메일 주소로 10초만에 가입해 마실을 시작하세요
      </div>
      <div className="flex justify-center w-72">
        <input
          ref={emailInputRef}
          onKeyDown={emailValidate}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray rounded-lg p-16"
          type="text"
        />
      </div>
      <div
        className={clsx('justify-center', 'w-72', {
          ['hidden']: emailNum.length === 0,
        })}>
        <input
          className="w-full bg-gray  rounded-lg p-16"
          type="text"
          placeholder="인증번호를 입력해주세요"
        />
      </div>
      {children}
    </>
  );
}
