import clsx from 'clsx';
import React from 'react';

export default function ProfilForm() {
  return (
    <>
      <div className="flex flex-col items-center mt-48">
        <div className="w-72 font-sans text-24 text-center">
          계정을 만드세요
        </div>
        <div className="absolute flex flex-col justify-center items-center w-72 h-72">
          <span className="relative inline-block w-10 h-10 top-12 left-12 rounded-full bg-orange text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 h-full w-full">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 w-3/5 h-3/5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
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
