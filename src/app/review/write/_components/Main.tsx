'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Icon from '@/components/Icon/Icon';
import { reviewStore } from '@/store/userStore';
import { reviewFormInputs } from '@/types/user/form';
import ReviewDetailRating from '../../[reviewId]/_components/ReviewDetailRating';
import ReviewDetailTags from '../../[reviewId]/_components/ReviewDetailTags';
import Footer from './Footer';
import Header from './Header';
import ReviewImg from './ReviewImg';
import ReviewModal from './ReviewModal';
import SearchForm from './SearchForm';
import TextArea from './TextArea';

export default function Main() {
  const reviewStatus = reviewStore();
  const [urlList, setUrlList] = useState<string[]>();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [imgModal, setImgModal] = useState(false);
  const [selectImgUrlIdx, setSelectImgUrlIdx] = useState(0);
  const { register, handleSubmit, watch } = useForm<reviewFormInputs>();
  console.log('setSelectImgUrlIdx = ', setSelectImgUrlIdx);

  const imgFiles = watch('img');

  useEffect(() => {
    let newUrl: string[] = [];
    for (let i = 0; i < imgFiles?.length; i++) {
      // 기존에 정의된 변수 사용
      const binaryData = [imgFiles[i]];
      const urlImage = URL.createObjectURL(
        new Blob(binaryData, { type: 'image' })
      );
      newUrl.push(urlImage);
    }
    if (urlList) {
      newUrl = [...urlList, ...newUrl];
    }
    setUrlList(newUrl);
    reviewStatus.setImgFiles(newUrl);
  }, [imgFiles]);

  const onReviewSubmitHandler: SubmitHandler<reviewFormInputs> = () => {
    // TO-DO: 데이터 전달하기
  };

  const onRemoveImgUrlHandler = () => {
    setUrlList(urlList?.filter((el) => el !== urlList[selectImgUrlIdx]));
    setSelectImgUrlIdx((prev) => prev - 1);
    selectImgUrlIdx === 0 && setImgModal((prev) => !prev);
  };

  const onDeleteLocaHandler = () => {
    reviewStatus.setResetPlaceState();
    reviewStatus.setCafeName('');
  };

  const onMoveIndexHandler = (arrow: string) => {
    if (arrow === 'left') {
      selectImgUrlIdx !== 0 && setSelectImgUrlIdx((prev) => prev - 1);
    } else {
      urlList &&
        selectImgUrlIdx !== urlList?.length - 1 &&
        setSelectImgUrlIdx((prev) => prev + 1);
    }
  };

  return reviewStatus.searchLoca ? (
    <SearchForm />
  ) : (
    <div className="relative h-full flex flex-col justify-between overflow-y-auto overflow-x-hidden p-5 scrollbar-thin scrollbar-thumb-primary scrollbar-track-bg_white">
      <form
        onSubmit={handleSubmit(onReviewSubmitHandler)}
        className="flex flex-col h-auto">
        <div className="h-full">
          <Header />
          {urlList && urlList.length > 0 && (
            <ReviewImg
              setImgModal={setImgModal}
              setSelectImgUrlIdx={setSelectImgUrlIdx}
              urlList={urlList}
              setList={setUrlList}
            />
          )}
        </div>
        <TextArea />
        {reviewStatus.likeCategory.length > 0 && reviewStatus.rate > 0 && (
          <div
            onClick={() => reviewStatus.setModalState()}
            className="flex flex-col my-7 max:my-3 gap-5 cursor-pointer items-center">
            <ReviewDetailRating rating={reviewStatus.rate} />
            <div className="w-4/5">
              <ReviewDetailTags tags={reviewStatus.likeCategory} />
            </div>
            <input className="hidden" type="text" />
          </div>
        )}

        {reviewStatus.cafeName && (
          <div className="flex justify-between items-center px-12 py-20 rounded-md border border-bg_disabled">
            <div className="flex flex-col gap-1">
              <span className="text-12 font-bold">{reviewStatus.cafeName}</span>
              <span className="text-10 text-text_grey">
                {reviewStatus.cafeLoca}
              </span>
            </div>
            <button
              onClick={onDeleteLocaHandler}
              className="flex items-center justify-center p-12 rounded-full border">
              <Icon name="close" size={16} />
            </button>
          </div>
        )}
      </form>

      {reviewStatus.modalState && <ReviewModal />}
      {imgModal && urlList && urlList?.length > 0 && (
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
      )}
      <Footer
        clickHandler={() => imgRef.current?.click()}
        register={register}
        imgRef={imgRef}
      />
    </div>
  );
}
