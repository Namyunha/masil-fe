'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

export default function CompleteForm() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-dvh justify-center">
      <div className="max:text-18 text-24 text-center">
        <p className="font-bold">비밀번호가 재설정 되었습니다.</p>
      </div>
      <div className="flex justify-center items-center h-60 m-11">
        <Icon name="register_logo" size={185} />
      </div>
      <Button
        onClick={() => router.push('/login')}
        size="m"
        text="로그인 하기"
      />
    </div>
  );
}
