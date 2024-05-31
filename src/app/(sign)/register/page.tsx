'use client';

import { useRegisterStore, useValidate } from '@/store/Ystore';
import EmailForm from '../_component/EmailForm';
import RegisterForm from '../_component/RegisterForm';

export default function Register() {
  const validate = useValidate();
  const userInfo = useRegisterStore();
  console.log('userInfo = ', userInfo);
  console.log('validate = ', validate);
  return <>{userInfo.isAgreed === false ? <EmailForm /> : <RegisterForm />}</>;
}
