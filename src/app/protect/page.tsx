'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon/Icon';

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <Icon name="triangle" />
        </div>
        <div className="text-18 font-extrabold flex justify-center my-5">
          로그인이 필요한 서비스입니다.
        </div>
        <div className="flex gap-10">
          <span onClick={() => router.back()}>
            <Button variant="secondary" text="이전으로" />
          </span>
          <span onClick={() => router.push('/login')}>
            <Button variant="primary" text="로그인" />
          </span>
        </div>
      </div>
    </div>
  );
}
