import Image from 'next/image';
import React from 'react';
import { reviewStore } from '@/store/userStore';

type ReviewImgProps = {
  urlList: string[];
  setList: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

export default function ReviewImg({ urlList, setList }: ReviewImgProps) {
  const reviewStatus = reviewStore();

  const uploadImgHandler = (img: string) => {
    const newArr = urlList?.filter((url) => img !== url);
    setList(newArr);
    reviewStatus.setImgFiles(newArr);
  };

  return (
    <ul className="flex justify-center h-28 max:h-[90px] overflow-hidden gap-3 my-3">
      {urlList.map((img, idx) => (
        <li key={idx} className="relative basis-1/3 rounded-md overflow-hidden">
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
            onClick={() => uploadImgHandler(img)}
            className="cursor-pointer absolute top-3 right-1 z-dim w-5 h-5 bg-button_bg_default hover:bg-button_bg_clicked text-white rounded-full flex items-center justify-center">
            x
          </span>
        </li>
      ))}
    </ul>
  );
}
