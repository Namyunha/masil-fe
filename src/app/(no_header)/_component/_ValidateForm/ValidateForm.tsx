import React from 'react';
import { userRegisterStore, validateCondition } from '@/store/userStore';
import ValidateEmailForm from './_component/ValidataEmailForm';
import ValidateNumberForm from './_component/ValidateNumberForm';

export default function ValidateForm() {
  const currentUserInfo = userRegisterStore();
  const validateState = validateCondition();

  return (
    <>
      <div className="text-20 mt-56">
        <p className="font-bold">
          로그인에 사용할 <br />
          이메일을 입력해주세요.
        </p>
      </div>
      {currentUserInfo.email ? <ValidateNumberForm /> : <ValidateEmailForm />}
    </>
  );
}
