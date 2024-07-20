'use client';
import React from 'react';
import { settingList } from '@/store/userStore';
import DeleteForm from './_DeleteForm/DeleteForm';
import ProfileForm from './ProfileForm';
import SettingList from './SettingList';

export function SettingContents() {
  const settingCategory = settingList();
  switch (settingCategory.currentSettingCategory) {
    case '설정':
      return <SettingList />;
    case '내 프로필':
      return <ProfileForm />;
    case '회원 탈퇴':
      return <DeleteForm />;
  }
}
