'use client';
import { useRegisterStore, useValidate } from '@/store/userStore';
import EmailForm from '../_component/EmailForm';
import RegisterForm from '../_component/RegisterForm';

export default function Register() {
  const userInfo = useRegisterStore();
  const validate = useValidate();
  console.log('validate = ', validate);

  console.log('userInfo = ', userInfo);
  return <>{userInfo.isAgreed === false ? <EmailForm /> : <RegisterForm />}</>;
}
