'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import SignHeader from '@/app/_components/sign/Header';
import Button from '@/components/Button';

export default function RegisterForm() {
  const router = useRouter();
  return (
    <div className="w-full max:mt-[60px] mt-[90px]">
      <SignHeader>마실이 처음이라면?</SignHeader>
      <Button
        onClick={() => router.push('/register')}
        className="w-full mt-3"
        variant="primary"
        size="m"
        text="이메일로 회원가입"
      />
    </div>
  );
}
