'use client';

import React, { FocusEvent, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Icon from '@/components/Icon';
import { reviewStore } from '@/store/userStore';
import { reviewFormInputs } from '@/types/user/form';
import ReviewDetailRating from '../../[reviewId]/_components/ReviewDetailRating';
import ReviewDetailTags from '../../[reviewId]/_components/ReviewDetailTags';
import Footer from './Footer';
import Header from './Header';
import RateStars from './RateStars';
import ReviewImg from './ReviewImg';
import ReviewWriteTags from './ReviewWriteTags';
import SearchForm from './SearchForm';

export default function Main() {
  const reviewStatus = reviewStore();
  // const imgUrls: string[] = [];
  const [urlList, setUrlList] = useState<string[]>();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit, watch } = useForm<reviewFormInputs>();

  const imgFiles = watch('img');

  useEffect(() => {
    textAreaRef.current?.focus();
    const newUrl: string[] = [];
    for (let i = 0; i < imgFiles?.length; i++) {
      // 기존에 정의된 변수 사용
      const binaryData = [imgFiles[i]];
      const urlImage = URL.createObjectURL(
        new Blob(binaryData, { type: 'image' })
      );
      newUrl.push(urlImage);
    }
    setUrlList(newUrl);
    reviewStatus.setImgFiles(newUrl);
  }, [imgFiles]);

  const onReviewSubmitHandler: SubmitHandler<reviewFormInputs> = () => {
    // TO-DO: 데이터 전달하기
  };

  const onDeleteLocaHandler = () => {
    reviewStatus.setResetPlaceState();
    reviewStatus.setCafeName('');
  };

  const onBlurHandler = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
    reviewStatus.setContent(e.target.value);
    reviewStatus.switchWriteMode();
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
            <ReviewImg urlList={urlList} setList={setUrlList} />
          )}
        </div>
        <div className="max-h-[80px] ">
          {reviewStatus.writeMode ? (
            <>
              <div
                onClick={() => reviewStatus.switchWriteMode()}
                className="w-full h-full absolute left-0 top-0 z-dim opacity-20"
              />
              <textarea
                onBlur={onBlurHandler}
                ref={textAreaRef}
                className="focus:outline-none relative z-modal resize-none w-full h-full max:h-[75px] scrollbar-thin scrollbar-thumb-primary scrollbar-track-bg_white mt-3"
              />
            </>
          ) : (
            <>
              <div
                className="w-full min-h-3 overflow-y-auto cursor-pointer break-words max-h-[70px] max:h-[60px] scrollbar-thin scrollbar-thumb-primary scrollbar-track-bg_white mt-3"
                onClick={() => reviewStatus.switchWriteMode()}>
                {reviewStatus.content}
              </div>
              <div className="border-[1px] border-stroke_grey my-3" />
            </>
          )}
        </div>
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

      {reviewStatus.modalState && (
        <>
          <div
            onClick={() => reviewStatus.setModalState()}
            className="w-full h-full absolute left-0 top-0 z-dim"
          />
          <div className="w-full animate-modalSlide px-5 pb-10 pt-[55px] absolute left-0 bottom-0 bg-white z-modal rounded-t-3xl shadow-elevation5">
            <div className="flex justify-center text-18 text-primary font-bold">
              '{reviewStatus.cafeName}'을 평가해주세요
            </div>
            <RateStars />
            <div>
              <div className="flex justify-center my-5">
                어떤 게 좋았나요? (중복 가능)
              </div>
              <div className="w-full flex justify-center">
                <div className="w-2/3">
                  <ReviewWriteTags
                    tags={[
                      'COFFEE',
                      'BEVERAGE',
                      'DESSERT',
                      'MANNER',
                      'MONEY',
                      'COZY',
                      'QUIET',
                      'ACCESSIBILITY',
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer
        clickHandler={() => imgRef.current?.click()}
        register={register}
        imgRef={imgRef}
      />
    </div>
  );
}
