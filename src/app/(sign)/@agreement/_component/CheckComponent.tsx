import clsx from 'clsx';
import React from 'react';
import Icon from '@/components/Icon';

type CheckComponentProps = {
  check1: boolean | undefined;
  check2: boolean | undefined;
  check3: boolean | undefined;
  setCheckType: (check: string, boolean: boolean) => void;
};

export default function CheckComponent({
  check1,
  check2,
  check3,
  setCheckType,
}: CheckComponentProps) {
  const onCheckHandler = (checkType?: number) => {
    switch (checkType) {
      case 1:
        setCheckType('check1', !check1);
        setCheckType('check2', !check1);
        setCheckType('check3', !check1);
        break;
      case 2:
        setCheckType('check2', !check2);
        break;
      case 3:
        setCheckType('check3', !check3);
        break;
      default:
        null;
    }
  };

  return (
    <>
      <div>
        <span className="mr-1 cursor-pointer" onClick={() => onCheckHandler(1)}>
          {check2 && check3 ? (
            <Icon
              name="check_circle_full"
              className="text-orange size-6 inline-block"
            />
          ) : (
            <Icon name="check_circle_outline" className="size-6 inline-block" />
          )}
        </span>
        <span>모두 동의</span>
      </div>
      <div>
        <div>
          <span className="mr-1" onClick={() => onCheckHandler(2)}>
            <Icon
              name="check"
              className={clsx('size-6', 'inline-block', 'cursor-pointer', {
                ['text-orange']: check2,
              })}
            />
          </span>
          <span>[필수] 마실 이용 약관</span>
          <Icon
            name="arrow_right"
            className="size-5 inline-block opacity-40 "
          />
        </div>
        <div>
          <span className="mr-1" onClick={() => onCheckHandler(3)}>
            <Icon
              name="check"
              className={clsx('size-6', 'inline-block', 'cursor-pointer', {
                ['text-orange']: check3,
              })}
            />
          </span>
          <span>[필수] 개인정보 수집 및 이용</span>
          <Icon
            name="arrow_right"
            className="size-5 inline-block opacity-40 "
          />
        </div>
      </div>
    </>
  );
}
