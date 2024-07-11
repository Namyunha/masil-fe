'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Icon from '@/components/Icon';

export default function BackBtnHead() {
  const router = useRouter();

  return (
    <div className="flex flex-col box-border w-full h-1/6 justify-center max-w-screen_max">
      <div className="flex justify-between">
        <span onClick={() => router.back()}>
          <Icon className="cursor-pointer mb-2" name="arrow_left" size={24} />
        </span>
      </div>
    </div>
  );
}
