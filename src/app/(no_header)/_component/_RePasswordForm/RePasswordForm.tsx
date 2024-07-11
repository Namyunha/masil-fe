import React from 'react';
import SignHeader from '@/app/_components/sign/Header';
import { userRegisterStore } from '@/store/userStore';
import ValidateEmailForm from './_component/ValidateEmailForm';
import ValidateNumberForm from './_component/ValidateNumberForm';

export default function RePasswordForm() {
  const currentUserInfo = userRegisterStore();
  return (
    <>
      <SignHeader>
        마실에 가입한 <br />
        이메일을 입력해주세요.
      </SignHeader>
      {currentUserInfo.email ? <ValidateNumberForm /> : <ValidateEmailForm />}
    </>
  );
}
