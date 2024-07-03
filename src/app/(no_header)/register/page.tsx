'use client';

import { useEffect } from 'react';
import { progressCondition } from '@/store/userStore';
import ProgressBarContainer from '../_component/_ProgressBar/ProgressBarContainer';
import FormContainer from '../_component/FormContainer';

export default function Register() {
  const progressStatus = progressCondition();
  useEffect(() => {
    progressStatus.setProgressCondition(1);
  }, []);
  return (
    <div className="h-dvh w-dvw box-border flex flex-col">
      {progressStatus.currentProgress < 5 && <ProgressBarContainer />}
      <FormContainer />
    </div>
  );
}
