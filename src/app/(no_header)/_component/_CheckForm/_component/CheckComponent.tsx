'use client';
import React, { useEffect } from 'react';
import { useRegisterStore } from '@/store/userStore';
import SelectBox from './SelectBox';

type setCheckType = {
  [key: string]: (boolean: boolean) => void;
};

export type CheckComponentProps = {
  allCheck: boolean;
  termsCheck: boolean;
  infoCollectCheck: boolean;
  setCheckType: setCheckType;
};

type checkHandlerProps = {
  checkType?: 'all' | 'terms' | 'infoCollect';
};

export default function CheckComponent({
  allCheck,
  termsCheck,
  infoCollectCheck,
  setCheckType,
}: CheckComponentProps) {
  const currentUserStatus = useRegisterStore();
  const { all, terms, infoCollect } = setCheckType;

  useEffect(() => {
    currentUserStatus.agreement ? all(true) : all(false);
  }, []);

  return (
    <div className="my-10">
      <div className="flex content-center justify-between border-b border-fields_stroke px-3 py-4">
        <span className="ml-1 font-black text-lg">전체 동의</span>
        <SelectBox
          isChecked={termsCheck && infoCollectCheck}
          onCheckHandler={() => all(!allCheck)}
        />
      </div>
      <div className="flex flex-col px-3">
        <div className="flex items-center justify-between py-4">
          <span className="text-sm align-middle">
            <span className="font-black">[필수]</span> 마실 이용 약관
          </span>
          <SelectBox
            isChecked={termsCheck}
            onCheckHandler={() => terms(!termsCheck)}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">
            <span className="font-black">[필수]</span> 개인정보 수집 및 이용
          </span>
          <SelectBox
            isChecked={infoCollectCheck}
            onCheckHandler={() => infoCollect(!infoCollectCheck)}
          />
        </div>
      </div>
    </div>
  );
}
