'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Icon from '@/components/Icon/Icon';

export default function SettingIcon() {
  const router = useRouter();
  return (
    <div className="w-1/6 flex justify-end items-center">
      <span onClick={() => router.push('/my-setting')}>
        <Icon className="cursor-pointer" name="setting" />
      </span>
    </div>
  );
}
