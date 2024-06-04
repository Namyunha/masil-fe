import clsx from 'clsx';
import React from 'react';
import ProfileImage from './ProfileImage';

export default function ProfilForm() {
  return (
    <>
      <div className="flex flex-col items-center mt-48">
        <div className="w-72 font-sans text-24 text-center">
          계정을 만드세요
        </div>
        <ProfileImage />
        <div className="flex flex-col h-96 mt-80 justify-end">
          <input
            className="text-center w-72 border-b-2 pt-3 pb-3 border-black/50"
            placeholder="상태 메시지를 입력하세요"
          />
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
              다음으로
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
