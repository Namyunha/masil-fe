'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Dim from '@/components/Dim';
import Icon from '@/components/Icon';
import { CafeDetailType } from '@/types/cafe';

type CafeDetailImagesProps = Pick<CafeDetailType, 'cafeImages'>;

export default function CafeDetailImages({
  cafeImages,
}: CafeDetailImagesProps) {
  const [selectedImgIdx, setSelectedImgIdx] = useState<number | null>(null);
  const MAX_IMAGE_COUNT = 5;
  const mainImage = cafeImages[0];
  const additionalImages = cafeImages.slice(1, MAX_IMAGE_COUNT);
  const extraCount = cafeImages.length - MAX_IMAGE_COUNT;
  const lackingCount = MAX_IMAGE_COUNT - cafeImages.length;

  // Todo: 이미지 상세보기 커스텀 훅으로 구현 & 다른 이미지에도 적용시키기
  const imgClickHandler = (index: number) => {
    setSelectedImgIdx(index);
  };

  const closeHandler = () => {
    setSelectedImgIdx(null);
  };

  const nextImgHandler = () => {
    setSelectedImgIdx((prev) => (prev! + 1) % cafeImages.length);
  };

  const prevImgHandler = () => {
    setSelectedImgIdx(
      (prev) => (prev! - 1 + cafeImages.length) % cafeImages.length
    );
  };

  return (
    <>
      <div className="h-1/3 grid grid-cols-2 ">
        <div className="col-span-1" onClick={() => imgClickHandler(0)}>
          <Image
            src={mainImage.url}
            alt="main"
            width={250}
            height={250}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2col h-full">
          {additionalImages.map((image, index) => (
            <div
              key={image.id}
              className="relative"
              onClick={() => imgClickHandler(index + 1)}>
              <Image
                src={image.url}
                alt={`additional-${index + 1}`}
                width={250}
                height={250}
                priority
                className="w-full h-full object-cover"
              />
              {index === 3 && extraCount > 0 && (
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-text_white">
                  +{extraCount}
                </div>
              )}
            </div>
          ))}
          {lackingCount > 0 &&
            Array.from({ length: lackingCount }).map((_, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-bg_disabled opacity-70">
                <Image
                  src="/icon/logo_secondary.svg"
                  alt={`lack-${index + 1}`}
                  width={50}
                  height={50}
                  priority
                  className="w-48 h-48 object-cover"
                />
              </div>
            ))}
        </div>
      </div>
      {selectedImgIdx !== null && (
        <>
          <Dim closeHandler={closeHandler} />
          <div className="absolute z-modal top-56 left-0">
            <Image
              src={cafeImages[selectedImgIdx].url}
              alt={`image-${selectedImgIdx}`}
              width={540}
              height={540}
              priority
              className="max-w-full max-h-full object-cover"
            />
            <button
              className="absolute bottom-16 left-16 bg-bg_white rounded-full border border-bg_disabled"
              onClick={prevImgHandler}>
              <Icon name="arrow_left" />
            </button>
            <button
              className="absolute bottom-16 right-16 bg-bg_white rounded-full border border-bg_disabled"
              onClick={nextImgHandler}>
              <Icon name="arrow_right" />
            </button>
            <button
              className="absolute top-[-40px] right-16 "
              onClick={closeHandler}>
              <Icon name="close" filter="WHITE" />
            </button>
            <div className="relative flex justify-center gap-1 top-8">
              {cafeImages.map((image, index) => (
                <div
                  key={image.id}
                  className={clsx('w-2 h-2 rounded-full cursor-pointer', {
                    ['bg-primary']: index === selectedImgIdx,
                    ['bg-text_light_grey']: index !== selectedImgIdx,
                  })}
                  onClick={() => imgClickHandler(index)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
