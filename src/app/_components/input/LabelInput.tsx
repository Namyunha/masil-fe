import clsx from 'clsx';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { formInputs, inputValidate } from '@/types/user/form';
// import { RegisterOptions } from '@/types/user/form';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

type LabelInputProps = {
  inputValue?: string;
  isDisabled: boolean;
  inputValidate: inputValidate;
  register: UseFormRegister<formInputs>;
  errorMessage?: string;
  filled?: string;
  className?: string;
  type?: string;
};

export default function LabelInput({
  inputValidate,
  inputValue = '',
  isDisabled,
  register,
  errorMessage,
  className,
  filled = 'small_filled',
  ...props
}: LabelInputProps) {
  return (
    <div className={clsx('relative', className)}>
      <input
        disabled={isDisabled}
        {...register(inputValidate.name, {
          ...inputValidate.validate,
          value: inputValue,
        })}
        id={filled}
        placeholder={inputValue}
        className={clsx(
          'peer block rounded-lg px-12 pt-4 max:pt-3 pb-8 max:pb-6 w-full border-2 focus:outline-none',
          errorMessage &&
            'bg-fields_bg_error border border-fields_stroke_error',
          isDisabled && 'text-text_grey'
        )}
        {...props}
      />
      <Label
        filled={filled}
        labelName={inputValidate.labelName}
        isDisabled={isDisabled}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
