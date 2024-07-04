import React from 'react';
import { userRegisterStore } from '@/store/userStore';
import ValidateEmailForm from './_component/ValidataEmailForm';
import ValidateNumberForm from './_component/ValidateNumberForm';

export default function ValidateForm() {
  const currentUserInfo = userRegisterStore();

  return (
    <>
      <div className="max:text-16 text-20">
        <p className="font-bold">
          로그인에 사용할 <br />
          이메일을 입력해주세요.
        </p>
      </div>
      {currentUserInfo.email ? <ValidateNumberForm /> : <ValidateEmailForm />}
    </>
  );
}
