'use client';

import React, { useState } from 'react';
import ActiveButton from '@/app/_components/ActiveButton';
import Icon from '@/components/Icon';
import { DELETE_REASON } from '@/constants/deleteReason';
import DeleteModal from './DeleteModal';

export default function DeleteFormContent() {
  const [deleteReason, setDeleteReason] = useState<string[]>([]);
  const [modal, setModal] = useState(false);
  console.log('deleteReason = ', deleteReason);
  const onClickHandler = (data: string) => {
    const foundedReason = deleteReason.find((el) => el === data);
    !foundedReason
      ? setDeleteReason([...deleteReason, data])
      : setDeleteReason(deleteReason.filter((el) => el !== data));
  };
  return (
    <>
      <div className="flex flex-col p-3">
        <div className="mb-7">
          <p className="text-14 font-bold">
            탈퇴하려는 이유를 모두 선택해주세요.
            <br /> 제품 개선에 활용하겠습니다.
          </p>
        </div>
        <div>
          {DELETE_REASON.map((el, idx) => (
            <div key={idx} className="mb-1">
              <span
                className="mr-1 cursor-pointer"
                onClick={() => onClickHandler(el.name)}>
                {deleteReason.find((reason) => reason === el.name) ? (
                  <Icon
                    filter="PRIMARY"
                    className="inline-block"
                    name="checkbox_check"
                  />
                ) : (
                  <Icon
                    filter="GRAY"
                    className="inline-block"
                    name="checkbox"
                  />
                )}
              </span>
              <span className="font-semibold">{el.message}</span>
            </div>
          ))}
        </div>
      </div>
      <span onClick={() => setModal(true)}>
        <ActiveButton errorState={!deleteReason.length}>완료</ActiveButton>
      </span>
      {modal && <DeleteModal closeHandler={() => setModal(false)} />}
    </>
  );
}
