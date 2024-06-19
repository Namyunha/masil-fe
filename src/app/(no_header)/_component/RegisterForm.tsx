import React from 'react';
import { useValidate } from '@/store/userStore';
import ProfileForm from './_RegisterForm/ProfileForm';
import UserInfoForm from './_RegisterForm/UserInfoForm';

export default function RegisterForm() {
  const validate = useValidate();
  return <>{validate.nextCheck ? <ProfileForm /> : <UserInfoForm />}</>;
}
