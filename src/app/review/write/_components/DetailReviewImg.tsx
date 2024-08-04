import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import Icon from '@/components/Icon/Icon';

type DetailReviewImgProps = {
  setImgModal: React.Dispatch<React.SetStateAction<boolean>>;
  onMoveIndexHandler: (arrow: 'left' | 'right') => void;
  urlList: string[];
  selectImgUrlIdx: number;
  setSelectImgUrlIdx: React.Dispatch<React.SetStateAction<number>>;
  onRemoveImgUrlHandler: () => void;
};

export default function DetailReviewImg({
  setImgModal,
  onMoveIndexHandler,
  urlList,
  selectImgUrlIdx,
  setSelectImgUrlIdx,
  onRemoveImgUrlHandler,
}: DetailReviewImgProps) {
  return (
    <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center">
      <div
        className="fixed z-modal left-0 right-0 top-0 mx-auto my-0 max-w-screen_max h-full bg-black opacity-80"
        onClick={() => setImgModal((prev) => !prev)}
      />
      <div className="relative z-modal w-4/5 h-3/4 bg-white">
        <span
          onClick={() => setImgModal((prev) => !prev)}
          className="absolute inline-block bg-button_bg_default hover:bg-button_bg_clicked p-2 rounded-full cursor-pointer top-4 right-4">
          <Icon filter="WHITE" name="close" />
        </span>
        <span
          onClick={() => onMoveIndexHandler('left')}
          className="absolute top-1/2 cursor-pointer opacity-40 hover:opacity-100">
          <Icon size={32} filter="WHITE" name="arrow_left" />
        </span>
        <span
          onClick={() => onMoveIndexHandler('right')}
          className="absolute top-1/2 right-0 cursor-pointer opacity-40 hover:opacity-100">
          <Icon size={32} filter="WHITE" name="arrow_right" />
        </span>
        <Image
          src={urlList[selectImgUrlIdx]}
          alt="img"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover"
        />
        <div className="relative -bottom-3 ">
          <div className="gap-2 left-0 w-full flex justify-center">
            {urlList?.map((el, idx) => (
              <span
                onClick={() => setSelectImgUrlIdx(idx)}
                key={idx}
                className={clsx(
                  'inline-block w-3 h-3 rounded-full cursor-pointer',
                  selectImgUrlIdx === idx ? 'bg-primary' : 'bg-gray'
                )}
              />
            ))}
            <span
              onClick={() => onRemoveImgUrlHandler()}
              className="absolute cursor-pointer font-bold -bottom-2 right-2 text-gray hover:text-primary">
              지우기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
