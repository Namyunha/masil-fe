import React from 'react';
import SignHeader from '@/app/_components/sign/Header';
import { userRegisterStore } from '@/store/userStore';
import ValidateEmailForm from './_component/ValidataEmailForm';
import ValidateNumberForm from './_component/ValidateNumberForm';

export default function ValidateForm() {
  const currentUserInfo = userRegisterStore();

  return (
    <>
      <SignHeader>
        로그인에 사용할 <br />
        이메일을 입력해주세요.
      </SignHeader>
      {currentUserInfo.email ? <ValidateNumberForm /> : <ValidateEmailForm />}
    </>
  );
}
