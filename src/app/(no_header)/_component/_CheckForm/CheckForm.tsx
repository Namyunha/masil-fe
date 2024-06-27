'use client';

import clsx from 'clsx';
import React from 'react';
import useCheck from '@/hooks/useCheck';
import { progessCondition } from '@/store/userStore';
import CheckComponent from './_component/CheckComponent';

export const CheckForm = () => {
  const progessStatus = progessCondition();
  const { check1, check2, check3, setCheckType } = useCheck();

  return (
    <>
      <div className="text-20 mt-56">
        <p className="font-bold">
          마실 서비스 이용약관에 <br />
          동의해주세요
        </p>
      </div>
      <div className="flex flex-col">
        <CheckComponent
          check1={check1}
          check2={check2}
          check3={check3}
          setCheckType={setCheckType}
        />
        <div className="flex justify-center">
          <button
            onClick={() => progessStatus.setProgessCondition(3)}
            disabled={!(check2 && check3)}
            className={clsx(
              'w-full',
              'font-semibold',
              'text-text_white',
              'rounded-lg',
              'p-12',
              'bg-gray',
              {
                ['bg-primary']: check2 && check3,
                ['cursor-not-allowed']: !(check2 && check3),
              }
            )}>
            다음
          </button>
        </div>
      </div>
    </>
  );
};
