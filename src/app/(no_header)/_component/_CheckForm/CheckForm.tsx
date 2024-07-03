'use client';

import clsx from 'clsx';
import React from 'react';
import useCheck from '@/hooks/useCheck';
import { progessCondition, useRegisterStore } from '@/store/userStore';
import CheckComponent from './_component/CheckComponent';

export const CheckForm = () => {
  const progessStatus = progessCondition();
  const currentUserStatus = useRegisterStore();
  const { allCheck, TermsCheck, infoCollectCheck, setCheckType } = useCheck();

  const onAgreementHandler = () => {
    progessStatus.setProgessCondition(3);
    currentUserStatus.setAgreement(true);
  };

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
          allCheck={allCheck}
          TermsCheck={TermsCheck}
          infoCollectCheck={infoCollectCheck}
          setCheckType={setCheckType}
        />
        <div className="flex justify-center">
          <button
            onClick={onAgreementHandler}
            disabled={!(TermsCheck && infoCollectCheck)}
            className={clsx(
              'w-full font-semibold text-text_white rounded-lg p-12 bg-gray',
              {
                ['bg-primary']: TermsCheck && infoCollectCheck,
                ['cursor-not-allowed']: !(TermsCheck && infoCollectCheck),
              }
            )}>
            다음
          </button>
        </div>
      </div>
    </>
  );
};
