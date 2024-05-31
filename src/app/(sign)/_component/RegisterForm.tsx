import clsx from 'clsx';
import React from 'react';

export default function RegisterForm() {
  return (
    <>
      <div className="w-72 font-sans text-24 text-center">계정을 만드세요</div>
      <div className="flex justify-center w-72">
        <input
          className={clsx('w-full', 'bg-gray', 'rounded-lg', 'p-16')}
          type="text"
          placeholder="ID를 입력하세요"
        />
      </div>
      <div className={clsx('justify-center', 'w-72')}>
        <input
          className="w-full bg-gray  rounded-lg p-16"
          type="text"
          placeholder="PW를 입력하세요"
        />
      </div>
      <div className={clsx('justify-center', 'w-72')}>
        <input
          className="w-full bg-gray  rounded-lg p-16"
          type="text"
          placeholder="닉네임을 입력하세요"
        />
      </div>
      <div className={clsx('flex', 'justify-center')}>
        <button
          className={clsx(
            'mt-28',
            'w-72',
            'font-semibold',
            'bg-orange',
            'text-white',
            'rounded-lg',
            'p-16'
          )}>
          다음으로
        </button>
      </div>
    </>
  );
}
