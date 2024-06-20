'use client';
import { useRegisterStore, useValidate } from '@/store/userStore';
import EmailForm from '../_component/EmailForm';
import ProgessBar from '../_component/ProgessBar';
import RegisterForm from '../_component/RegisterForm';

export default function Register() {
  const validate = useValidate();
  console.log('validate = ', validate);
  const userInfo = useRegisterStore();
  return (
    <div className="h-dvh w-dvw box-border p-10 flex flex-col">
      <ProgessBar />
      {userInfo.isAgreed === false ? <EmailForm /> : <RegisterForm />}
    </div>
  );
}
