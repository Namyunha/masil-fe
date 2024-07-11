'use client';

import { useEffect } from 'react';
import { progressCondition, validateCondition } from '@/store/userStore';
import ProgressBarContainer from '../_component/_ProgressBar/ProgressBarContainer';
import FormContainer from '../_component/FormContainer';

export default function Register() {
  const progressStatus = progressCondition();
  useEffect(() => {
    progressStatus.setProgressCondition(1);
  }, []);

  const validateState = validateCondition();
  console.log('validateState = ', validateState);
  return (
    <div className="h-dvh w-full box-border flex flex-col">
      {progressStatus.currentProgress < 5 && <ProgressBarContainer />}
      <FormContainer />
    </div>
  );
}
