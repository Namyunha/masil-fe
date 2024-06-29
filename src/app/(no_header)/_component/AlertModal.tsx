import React, { Dispatch, SetStateAction } from 'react';

export default function AlertModal({
  setModalOn,
}: {
  setModalOn: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute z-modal top-0 left-0 pt-10 flex justify-center items-center w-full h-full bg-black bg-opacity-80">
      <div className="w-5/6 h-44 bg-white rounded-lg flex flex-col justify-center items-center">
        <span className="text-18 mb-7 font-bold">
          인증번호를 다시 보냈습니다
        </span>
        <button
          onClick={() => setModalOn((prev) => !prev)}
          className="px-7 py-3 rounded bg-button_bg_default text-text_white">
          확인
        </button>
      </div>
    </div>
  );
}
