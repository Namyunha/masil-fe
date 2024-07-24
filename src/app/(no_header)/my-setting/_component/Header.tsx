'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '@/components/Button/Button';
import { settingList } from '@/store/userStore';

export default function Header() {
  const settingCategory = settingList();
  const router = useRouter();
  const onBackBtnHandler = () => {
    settingCategory.currentSettingCategory === '설정'
      ? router.back()
      : settingCategory.setSettingCategory('설정');
  };

  return (
    <header className="sticky top-0 flex justify-center items-center z-float py-12 bg-bg_white shadow-elevation1">
      <Button
        onClick={onBackBtnHandler}
        className="absolute left-20"
        variant="secondary"
        size="s"
        childrenType="iconOnly"
        iconName="arrow_left"
      />
      <span className="font-bold">
        {settingCategory.currentSettingCategory}
      </span>
    </header>
  );
}
