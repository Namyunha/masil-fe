'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Icon from '@/components/Icon/Icon';
import { reviewStore } from '@/store/userStore';
import { reviewFormInputs } from '@/types/user/form';
import ReviewDetailRating from '../../[reviewId]/_components/ReviewDetailRating';
import ReviewDetailTags from '../../[reviewId]/_components/ReviewDetailTags';
import DetailReviewImg from './DetailReviewImg';
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
        <DetailReviewImg
          setImgModal={setImgModal}
          onMoveIndexHandler={onMoveIndexHandler}
          urlList={urlList}
          selectImgUrlIdx={selectImgUrlIdx}
          setSelectImgUrlIdx={setSelectImgUrlIdx}
          onRemoveImgUrlHandler={onRemoveImgUrlHandler}
        />
      )}
      <Footer
        clickHandler={() => imgRef.current?.click()}
        register={register}
        imgRef={imgRef}
      />
    </div>
  );
}
