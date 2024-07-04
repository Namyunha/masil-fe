import React from 'react';
import { progressCondition } from '@/store/userStore';
import { CheckForm } from './_CheckForm/CheckForm';
import PasswordForm from './_PasswordForm/PasswordForm';
import ProfileForm from './_ProfileForm/ProfileForm';
import ValidateForm from './_ValidateForm/ValidateForm';
import CompleteForm from './CompleteForm';

export default function FormContainer() {
  const progressStatus = progressCondition();
  const getContent = () => {
    switch (progressStatus.currentProgress) {
      case 1:
        return <ValidateForm />;
      case 2:
        return <CheckForm />;
      case 3:
        return <PasswordForm />;
      case 4:
        return <ProfileForm />;
      case 5:
        return <CompleteForm />;
      default:
        return null;
    }
  };
  return <div className="items-center px-10 mt-3">{getContent()}</div>;
}
