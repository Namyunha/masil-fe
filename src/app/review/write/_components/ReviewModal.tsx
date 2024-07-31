import React from 'react';
import { reviewStore } from '@/store/userStore';
import RateStars from './RateStars';
import ReviewWriteTags from './ReviewWriteTags';

export default function ReviewModal() {
  const reviewStatus = reviewStore();

  return (
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
  );
}
