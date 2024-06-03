import React from 'react';
import { useValidate } from '@/store/Ystore';
import ProfilForm from './ProfilForm';
import UserInfoForm from './UserInfoForm';

export default function RegisterForm() {
  const validate = useValidate();
  return <>{validate.nextCheck ? <ProfilForm /> : <UserInfoForm />}</>;
}
