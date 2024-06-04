'use client';

import clsx from 'clsx';
import React, { useCallback } from 'react';
import useCheck from '@/hooks/useCheck';
import { useModalStore, useValidate } from '@/store/userStore';
import { AllCheck, RequiredCheck } from './CheckIcons';

export const CheckForm = () => {
  const modalState = useModalStore();
  const { check1, check2, check3, setCheckType } = useCheck();
  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };
  const validate = useValidate();

  const onEmailHandler = useCallback(() => {
    console.log('실행');
    validate.setCertification(random());
    setCheckType('reset');
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
      <AllCheck
        check1={check1}
        check2={check2}
        check3={check3}
        setCheck={setCheckType}
      />
      <RequiredCheck check2={check2} check3={check3} setCheck={setCheckType} />

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
            {
              ['bg-gray']: !(check2 && check3),
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
