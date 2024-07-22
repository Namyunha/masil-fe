'use client';

import { useEffect } from 'react';
import {
  progressCondition,
  userRegisterStore,
  validateCondition,
} from '@/store/userStore';
import ProgressBarContainer from '../_component/_ProgressBar/ProgressBarContainer';
import FormContainer from '../_component/FormContainer';

export default function Register() {
  const userState = userRegisterStore();
  const validateState = validateCondition();
  const progressStatus = progressCondition();
  useEffect(() => {
    userState.resetProfile();
    progressStatus.setProgressCondition(1);
    validateState.setConfirmState(false);
    validateState.setValidateNum('');
    validateState.setAgreement(false);
  }, []);

  return (
    <div className="h-dvh w-full box-border flex flex-col">
      {progressStatus.currentProgress < 5 && <ProgressBarContainer />}
      <FormContainer />
    </div>
  );
}
