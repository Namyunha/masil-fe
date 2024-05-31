'use client';

import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { useModalStore, useValidate } from '@/store/Ystore';

export default function LoginModal() {
  const modalState = useModalStore();
  console.log('modalState = ', modalState);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };

  const validate = useValidate();

  const onEmailHandler = useCallback(() => {
    validate.setCertification(random());
    modalState.changeStatus();
  }, []);

  const eventHandler = useCallback((e) => {
    if (e.key === 'Escape') {
      modalState.changeStatus();
      return;
    }
  }, []);

  document.addEventListener('keydown', eventHandler);

  return (
    <>
      <div
        onClick={(e) => {
          if (e.screenY < 535 || e.screenX < 325 || e.screenX > 648) {
            modalState.changeStatus();
          }
        }}
        className={clsx(
          'w-dvw',
          'h-dvh',
          'flex',
          'absolute',
          'bottom-0',
          'z-10',
          'justify-center',
          'bg-zinc-950/50',
          { ['invisible']: !modalState.modalStatus }
        )}>
        <div
          className={clsx(
            'w-[20rem]',
            'h-72',
            'absolute',
            'bottom-0',
            'font-semibold',
            'z-20',
            'bg-white'
          )}>
          <div className="w-full h-full gap-5 flex flex-col justify-between box-border p-4">
            <div>서비스 이용 전 약관 동의가 필요해요</div>
            <div>
              <span
                className={clsx('cursor-pointer')}
                onClick={() => {
                  setCheck1(!check1);
                  setCheck2(!check1);
                  setCheck3(!check1);
                }}>
                {check2 === true && check3 === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={clsx('size-6', 'inline-block', 'text-orange')}>
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={clsx('size-6', 'inline-block')}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                )}
              </span>
              &nbsp;
              <span>모두 동의</span>
            </div>
            <div>
              <div>
                <svg
                  onClick={() => setCheck2(!check2)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={clsx('size-6', 'inline-block', 'cursor-pointer', {
                    ['text-orange']: check2 === true,
                  })}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                &nbsp;
                <span>[필수] 마실 이용 약관</span>
                &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={clsx('size-5', 'inline-block', 'opacity-40')}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div>
                <svg
                  onClick={() => setCheck3(!check3)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={clsx('size-6', 'inline-block', 'cursor-pointer', {
                    ['text-orange']: check3 === true,
                  })}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                &nbsp;
                <span>[필수] 개인정보 수집 및 이용</span>
                &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={clsx('size-5', 'inline-block', 'opacity-40')}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className={clsx('flex', 'justify-center')}>
              <button
                disabled={!(check2 && check3 === true)}
                onClick={onEmailHandler}
                className={clsx(
                  'w-72',
                  'font-semibold',
                  'text-white',
                  'rounded-lg',
                  'p-16',
                  {
                    ['bg-gray']: !(check2 && check3 === true),
                    ['bg-orange']: check2 && check3 === true,
                    ['cursor-not-allowed']: !(check2 && check3 === true),
                  }
                )}>
                동의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
