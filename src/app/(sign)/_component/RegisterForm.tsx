import React from 'react';
import { useValidate } from '@/store/userStore';
import ProfilForm from './_RegisterForm/ProfilForm';
import UserInfoForm from './_RegisterForm/UserInfoForm';

export default function RegisterForm() {
  const validate = useValidate();
  return <>{validate.nextCheck ? <ProfilForm /> : <UserInfoForm />}</>;
}
