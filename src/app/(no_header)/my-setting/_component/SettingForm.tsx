'use client';

import React from 'react';
import { settingList } from '@/store/userStore';
import DeleteForm from './DeleteForm';
import Header from './Header';
import ProfileForm from './ProfileForm';
import SettingList from './SettingList';

export default function SettingForm() {
  const settingCategory = settingList();
  const getContent = () => {
    switch (settingCategory.currentSettingCategory) {
      case '설정':
        return <SettingList />;
      case '내 프로필':
        return <ProfileForm />;
      case '회원 탈퇴':
        return <DeleteForm />;
    }
  };
  return (
    <>
      <Header />
      {getContent()}
    </>
  );
}
