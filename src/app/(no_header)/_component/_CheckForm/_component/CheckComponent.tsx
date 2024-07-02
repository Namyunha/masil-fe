'use client';
import React, { useEffect } from 'react';
import { useRegisterStore } from '@/store/userStore';
import { AllSelectBox, SelectBox } from './SelectBox';

type setCheckType = {
  [key: string]: (boolean: boolean) => void;
};

export type CheckComponentProps = {
  allCheck: boolean;
  TermsCheck: boolean;
  infoCollectCheck: boolean;
  setCheckType: setCheckType;
};

type checkHandlerProps = {
  checkType?: 'all' | 'terms' | 'infoCollect';
};

export default function CheckComponent({
  allCheck,
  TermsCheck,
  infoCollectCheck,
  setCheckType,
}: CheckComponentProps) {
  const currentUserStatus = useRegisterStore();
  const { all, terms, infoCollect } = setCheckType;

  const onCheckHandler = ({ checkType }: checkHandlerProps) => {
    switch (checkType) {
      case 'all':
        all(!allCheck);
        break;
      case 'terms':
        terms(!TermsCheck);
        break;
      case 'infoCollect':
        infoCollect(!infoCollectCheck);
        break;
    }
  };
  useEffect(() => {
    currentUserStatus.agreement && onCheckHandler({ checkType: 'all' });
  }, []);

  return (
    <div className="my-10">
      <div className="flex content-center justify-between border-b border-fields_stroke px-3 py-4">
        <span className="ml-1 font-black text-lg">전체 동의</span>
        <AllSelectBox
          types={{ TermsCheck, infoCollectCheck }}
          onCheckHandler={() => onCheckHandler({ checkType: 'all' })}
        />
      </div>
      <div className="flex flex-col px-3">
        <div className="flex items-center justify-between py-4">
          <span className="text-sm align-middle">
            <span className="font-black">[필수]</span> 마실 이용 약관
          </span>
          <SelectBox
            types={{ TermsCheck }}
            onCheckHandler={() => onCheckHandler({ checkType: 'terms' })}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">
            <span className="font-black">[필수]</span> 개인정보 수집 및 이용
          </span>
          <SelectBox
            types={{ infoCollectCheck }}
            onCheckHandler={() => onCheckHandler({ checkType: 'infoCollect' })}
          />
        </div>
      </div>
    </div>
  );
}
