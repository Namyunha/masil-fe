'use client';

import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { useModalStore, useValidate } from '@/store/Ystore';
import { AllCheck, RequiredCheck } from './CheckIcons';

export const CheckForm = () => {
  const modalState = useModalStore();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };

  const validate = useValidate();

  const onEmailHandler = useCallback(() => {
    console.log('실행');
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
      <AllCheck
        check1={check1}
        setCheck1={setCheck1}
        check2={check2}
        setCheck2={setCheck2}
        check3={check3}
        setCheck3={setCheck3}
      />
      <RequiredCheck
        check2={check2}
        setCheck2={setCheck2}
        check3={check3}
        setCheck3={setCheck3}
      />

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
    </>
  );
};
