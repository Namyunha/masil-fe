'use client';

import { useEffect } from 'react';
import { progessCondition } from '@/store/userStore';
import ProgessBarContainer from '../_component/_ProgessBar/ProgessBarContainer';
import FormContainer from '../_component/FormContainer';

export default function Register() {
  const progressStatus = progessCondition();
  useEffect(() => {
    progressStatus.setProgessCondition(1);
  }, []);
  return (
    <div className="h-dvh w-dvw box-border flex flex-col">
      {progressStatus.currentProgess < 5 && <ProgessBarContainer />}
      <FormContainer />
    </div>
  );
}
