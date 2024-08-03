import Image from 'next/image';
import React from 'react';
import { reviewStore } from '@/store/userStore';

type ReviewImgProps = {
  urlList: string[];
  setList: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setImgModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectImgUrlIdx: React.Dispatch<React.SetStateAction<number>>;
};

export default function ReviewImg({
  urlList,
  setList,
  setImgModal,
  setSelectImgUrlIdx,
}: ReviewImgProps) {
  const MAX_IMAGE_COUNT = 2;
  const additionalImages = urlList.slice(0, MAX_IMAGE_COUNT);
  const extraCount = urlList.length - MAX_IMAGE_COUNT - 1;
  const reviewStatus = reviewStore();

  const uploadImgHandler = (img: string) => {
    const newArr = urlList?.filter((url) => img !== url);
    setList(newArr);
    reviewStatus.setImgFiles(newArr);
  };

  const imgSelectedHandler = (idx: number) => {
    setImgModal((prev) => !prev);
    setSelectImgUrlIdx(idx);
  };

  return (
    <ul className="flex justify-center h-28 max:h-[90px] overflow-hidden gap-3 my-3">
      {additionalImages.map((img, idx) => (
        <li
          onClick={() => imgSelectedHandler(idx)}
          key={idx}
          className="relative basis-1/3 rounded-md overflow-hidden cursor-pointer">
          <Image
            src={img}
            alt={img}
            fill={true}
            // Todo: 이미지 사이즈 최적화하기
            sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
            className="object-cover"
            priority
          />
          <span
            onClick={(e) => {
              e.stopPropagation();
              uploadImgHandler(img);
            }}
            className="cursor-pointer absolute top-3 right-1 z-dim w-5 h-5 bg-button_bg_default hover:bg-button_bg_clicked text-white rounded-full flex items-center justify-center">
            x
          </span>
        </li>
      ))}
      {urlList.length > 2 && (
        <li
          onClick={() => imgSelectedHandler(2)}
          className="relative basis-1/3 rounded-md overflow-hidden cursor-pointer">
          <Image
            src={urlList[2]}
            alt={urlList[2]}
            fill={true}
            // Todo: 이미지 사이즈 최적화하기
            sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
            className="object-cover"
            priority
          />
          {extraCount > 0 ? (
            <span className="absolute z-modal left-0 top-0 w-full h-full bg-black bg-opacity-50 text-white flex justify-center items-center">
              +{extraCount}
            </span>
          ) : (
            <span
              onClick={() => uploadImgHandler(urlList[2])}
              className="cursor-pointer absolute top-3 right-1 z-float w-5 h-5 bg-button_bg_default hover:bg-button_bg_clicked text-white rounded-full flex items-center justify-center">
              x
            </span>
          )}
        </li>
      )}
    </ul>
  );
}
