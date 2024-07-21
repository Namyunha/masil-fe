'use client';

import React, { useState } from 'react';
import { SETTING_LIST } from '@/constants/setting';
import { settingList } from '@/store/userStore';
import LogOutForm from './LogOutForm';

export default function SettingList() {
  const settingCategory = settingList();
  const [modal, setModal] = useState(false);

  const onClickHandler = (name: string) => {
    switch (name) {
      case '내 프로필':
        console.log('내 프로필');
        settingCategory.setSettingCategory('내 프로필');
        break;
      case '로그아웃':
        console.log('로그아웃');
        setModal(true);
        break;
      case '회원탈퇴':
        console.log('회원탈퇴');
        settingCategory.setSettingCategory('회원 탈퇴');
        break;
    }
  };
  return (
    <>
      <div className="mt-2">
        {SETTING_LIST.map((el, index) => (
          <div key={index} className=" pl-10 py-4 border-b-[2px] border-gray">
            <span
              onClick={() => onClickHandler(el.name)}
              className="font-bold text-text_grey hover:text-black cursor-pointer">
              {el.name}
            </span>
          </div>
        ))}
      </div>
      {modal && <LogOutForm setModal={() => setModal(false)} />}
    </>
  );
}
