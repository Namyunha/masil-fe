'use client';

import React from 'react';
import ProgressBarContainer from '../_component/_ProgressBar/ProgressBarContainer';
import RePasswordForm from '../_component/_RePasswordForm/RePasswordForm';

export default function page() {
  return (
    <div className="h-dvh w-full box-border flex flex-col">
      <ProgressBarContainer />
      <RePasswordForm />
    </div>
  );
}
