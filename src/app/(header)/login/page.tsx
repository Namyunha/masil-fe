import React from 'react';
import SignHeader from '@/app/_components/sign/Header';
import LoginForm from './_component/LoginForm';
import RegisterForm from './_component/RegisterForm';

export default async function page() {
  return (
    <>
      <div className="relative top-[80px] max:top-[65px] flex flex-col justify-center px-5">
        <SignHeader>
          안녕하세요 <br />
          카패 추천 플렛폼 마실입니다.
        </SignHeader>
        <LoginForm />
      </div>

      <RegisterForm />
    </>
  );
}
