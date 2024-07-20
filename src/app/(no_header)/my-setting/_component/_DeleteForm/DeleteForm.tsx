import React from 'react';
import DeleteFormContent from './DeleteFormContet';

export default function DeleteForm() {
  return (
    <div className="h-full p-5">
      <div className="h-2/5 pt-5">
        <h1 className="text-20 font-bold mb-5">
          마실을 떠나신다니 너무 아쉬워요
        </h1>
        <p className="text-14">
          마실에서 작성한 모든 글과 활동 내역이 사라져요.
          <br /> 삭제된 정보는 다시 복구할 수 없어요.
        </p>
      </div>
      <div className="h-1/2 flex flex-col justify-between">
        <DeleteFormContent />
      </div>
    </div>
  );
}
