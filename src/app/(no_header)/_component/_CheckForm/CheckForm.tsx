'use client';

import React from 'react';
import ActiveButton from '@/app/_components/ActiveButton';
import SignHeader from '@/app/_components/sign/Header';
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
      <SignHeader>
        마실 서비스 이용약관에 <br />
        동의해주세요
      </SignHeader>
      <div className="flex flex-col">
        <CheckComponent
          allCheck={allCheck}
          termsCheck={termsCheck}
          infoCollectCheck={infoCollectCheck}
          setCheckType={setCheckType}
        />
        <div className="flex justify-center">
          <ActiveButton
            onClick={onAgreementHandler}
            errorState={!(termsCheck && infoCollectCheck)}>
            다음
          </ActiveButton>
        </div>
      </div>
    </>
  );
};
