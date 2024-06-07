'use client';

import clsx from 'clsx';
import React, { useCallback, useEffect } from 'react';
import useCheck from '@/hooks/useCheck';
import { useModalStore, useValidate } from '@/store/userStore';
import CheckComponent from './CheckComponent';

export const CheckForm = () => {
  const modalState = useModalStore();
  const { check1, check2, check3, setCheckType } = useCheck();
  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };
  const validate = useValidate();

  const onEmailHandler = useCallback(() => {
    validate.setCertification(random());
    modalState.changeStatus();
  }, []);

  const eventHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      modalState.changeStatus();
      return;
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', eventHandler);
    return () => {
      document.removeEventListener('keydown', eventHandler);
    };
  }, [eventHandler]);

  return (
    <>
      <CheckComponent
        check1={check1}
        check2={check2}
        check3={check3}
        setCheckType={setCheckType}
      />
      <div className="flex justify-center">
        <button
          disabled={!(check2 && check3)}
          onClick={onEmailHandler}
          className={clsx(
            'w-72',
            'font-semibold',
            'text-white',
            'rounded-lg',
            'p-16',
            'bg-gray',
            {
              ['bg-orange']: check2 && check3,
              ['cursor-not-allowed']: !(check2 && check3),
            }
          )}>
          동의하기
        </button>
      </div>
    </>
  );
};
