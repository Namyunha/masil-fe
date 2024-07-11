'use client';

import React from 'react';
import { validateCondition } from '@/store/userStore';
import RePasswordForm from '../_component/_RePasswordForm/RePasswordForm';

export default function page() {
  const validateState = validateCondition();
  console.log('validateState = ', validateState);
  return (
    <>
      <RePasswordForm />;
    </>
  );
}
