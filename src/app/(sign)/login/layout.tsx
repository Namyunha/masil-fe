'use client';

import React from 'react';
import { useModalStore } from '@/store/store';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const modal = useModalStore();
  console.log('modal = ', modal);
  return (
    <>
      {children}
      <div className="w-72 font-sans text-24 text-center">
        이메일 주소로 10초만에 가입해 마실을 시작하세요
      </div>
      <div className="flex justify-center w-72">
        <input className="w-full bg-gray rounded-lg p-16" type="text" />
      </div>
      <div className="hidden justify-center w-72">
        <input
          className="w-full bg-gray rounded-lg p-16"
          type="text"
          placeholder="인증번호를 입력해주세요"
        />
      </div>
    </>
  );
}
