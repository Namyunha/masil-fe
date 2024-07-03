import React from 'react';
import Icon from '@/components/Icon';
import { CheckComponentProps } from './CheckComponent';

type SelectBoxProps = {
  types: Partial<CheckComponentProps>;
  onCheckHandler: () => void;
};

export function SelectBox({ types, onCheckHandler }: SelectBoxProps) {
  return (
    <span className="cursor-pointer" onClick={() => onCheckHandler()}>
      {types.TermsCheck || types.infoCollectCheck ? (
        <Icon name="checkbox_check" filter="PRIMARY" />
      ) : (
        <Icon name="checkbox" filter="PRIMARY" />
      )}
    </span>
  );
}

export function AllSelectBox({ types, onCheckHandler }: SelectBoxProps) {
  return (
    <span className="cursor-pointer" onClick={() => onCheckHandler()}>
      {types.TermsCheck && types.infoCollectCheck ? (
        <Icon name="checkbox_check" filter="PRIMARY" />
      ) : (
        <Icon name="checkbox" filter="PRIMARY" />
      )}
    </span>
  );
}
