import clsx from 'clsx';
import React from 'react';

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center mt-48 gap-48">
      <div className="flex flex-col justify-center w-72">
        <input
          className="w-full bg-gray  rounded-lg p-16"
          type="text"
          placeholder="아이디를 입력해주세요"
        />
      </div>
      <div className="justify-center w-72">
        <input
          className="w-full bg-gray  rounded-lg p-16"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </div>
      <div className="flex justify-center">
        <button
          className={clsx(
            'mt-28',
            'w-72',
            'font-semibold',
            'text-white',
            'rounded-lg',
            'p-16',
            'bg-gray'
          )}>
          로그인
        </button>
      </div>
    </form>
  );
}
