import React, { FocusEvent, useEffect, useRef } from 'react';
import { reviewStore } from '@/store/userStore';

export default function TextArea() {
  const reviewStatus = reviewStore();
  const onBlurHandler = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
    reviewStatus.setContent(e.target.value);
    reviewStatus.switchWriteMode();
  };

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (reviewStatus.writeMode) {
      textAreaRef.current?.focus();
    }
  }, [reviewStatus.writeMode]);

  return (
    <div className="max-h-[80px] ">
      {reviewStatus.writeMode ? (
        <>
          <div
            onClick={() => reviewStatus.switchWriteMode()}
            className="w-full h-full absolute left-0 top-0 z-dim opacity-20"
          />
          <textarea
            onChange={(e) => reviewStatus.setContent(e.target.value)}
            value={reviewStatus.content}
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
  );
}
