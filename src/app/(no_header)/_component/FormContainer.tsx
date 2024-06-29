import React from 'react';
import { progessCondition, useRegisterStore } from '@/store/userStore';
import { CheckForm } from './_CheckForm/CheckForm';
import PasswordForm from './_PasswordForm/PasswordForm';
import ProfileForm from './_ProfileForm/ProfileForm';
import ValidateForm from './_ValidateForm/ValidateForm';
import CompleteForm from './CompleteForm';

export default function FormContainer() {
  const currentUserInfo = useRegisterStore();
  const progessStatus = progessCondition();

  console.log('currentUserInfo = ', currentUserInfo);

  let content;
  switch (progessStatus.currentProgess) {
    case 1:
      content = <ValidateForm />;
      break;
    case 2:
      content = <CheckForm />;
      break;
    case 3:
      content = <PasswordForm />;
      break;
    case 4:
      content = <ProfileForm />;
      break;
    case 5:
      content = <CompleteForm />;
      break;
    default:
      content = null;
  }

  return <div className="items-center mt-10 p-10">{content}</div>;
}
