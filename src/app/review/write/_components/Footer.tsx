import React, { MutableRefObject } from 'react';
import { UseFormRegister } from 'react-hook-form';
import Icon from '@/components/Icon/Icon';
import { reviewStore } from '@/store/userStore';
import { reviewFormInputs } from '@/types/user/form';

type FooterProps = {
  imgRef: MutableRefObject<HTMLInputElement | null>;
  clickHandler: () => void;
  register: UseFormRegister<reviewFormInputs>;
};

function Footer({ imgRef, clickHandler, register }: FooterProps) {
  const { ref: registerRef, ...rest } = register('img');

  const reviewState = reviewStore();

  return (
    <div className="flex z-dim w-full absolute left-0 px-7 py-3 bottom-0 justify-between border-t-[1px] bg-white border-stroke_grey">
      <span
        onClick={() => clickHandler()}
        className="text-primary cursor-pointer">
        <Icon className="inline-block" filter="PRIMARY" name="image" /> 사진
      </span>
      <span
        onClick={() => reviewState.switchSearchLoca()}
        className="text-primary cursor-pointer">
        <Icon className="inline-block" filter="PRIMARY" name="map_pin" /> 위치
      </span>
      <input
        multiple
        {...rest}
        ref={(e) => {
          registerRef(e);
          imgRef.current = e;
        }}
        className="hidden"
        type="file"
      />
    </div>
  );
}

export default Footer;
