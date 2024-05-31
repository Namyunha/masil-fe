import clsx from 'clsx';
import React from 'react';

type CheckProps = {
  check1: boolean;
  check2: boolean;
  check3: boolean;
  setCheck1: (check1: boolean) => void;
  setCheck2: (check1: boolean) => void;
  setCheck3: (check1: boolean) => void;
};

export const AllCheck = ({
  check1,
  check2,
  check3,
  setCheck1,
  setCheck2,
  setCheck3,
}: CheckProps) => {
  return (
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
  );
};

type RequiredCheckProps = {
  check2: boolean;
  check3: boolean;
  setCheck2: (check1: boolean) => void;
  setCheck3: (check1: boolean) => void;
};

export const RequiredCheck = ({
  check2,
  check3,
  setCheck2,
  setCheck3,
}: RequiredCheckProps) => {
  return (
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
  );
};
