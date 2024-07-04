'use client';

import clsx from 'clsx';
import React from 'react';
import useCheck from '@/hooks/useCheck';
import { progressCondition, validateCondition } from '@/store/userStore';
import CheckComponent from './_component/CheckComponent';

export const CheckForm = () => {
  const progressStatus = progressCondition();
  const validateStatus = validateCondition();
  const { allCheck, termsCheck, infoCollectCheck, setCheckType } = useCheck();

  const onAgreementHandler = () => {
    progressStatus.setProgressCondition(3);
    validateStatus.setAgreement(true);
  };

  return (
    <>
      <div className="max:text-16 text-20">
        <p className="font-bold">
          마실 서비스 이용약관에 <br />
          동의해주세요
        </p>
      </div>
      <div className="flex flex-col">
        <CheckComponent
          allCheck={allCheck}
          termsCheck={termsCheck}
          infoCollectCheck={infoCollectCheck}
          setCheckType={setCheckType}
        />
        <div className="flex justify-center">
          <button
            onClick={onAgreementHandler}
            disabled={!(termsCheck && infoCollectCheck)}
            className={clsx(
              'w-full font-semibold text-text_white rounded-lg p-12 bg-gray',
              {
                ['bg-primary']: termsCheck && infoCollectCheck,
                ['cursor-not-allowed']: !(termsCheck && infoCollectCheck),
              }
            )}>
            다음
          </button>
        </div>
      </div>
    </>
  );
};
