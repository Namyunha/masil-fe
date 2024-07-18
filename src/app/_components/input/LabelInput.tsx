import clsx from 'clsx';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { formInputs, inputValidate } from '@/types/user/form';
// import { RegisterOptions } from '@/types/user/form';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

type LabelInputProps = {
  inputValue: string;
  isDisabled: boolean;
  inputValidate: inputValidate;
  register: UseFormRegister<formInputs>;
  errorMessage?: string;
};

export default function LabelInput({
  inputValidate,
  inputValue,
  isDisabled,
  register,
  errorMessage,
}: LabelInputProps) {
  return (
    <div className="relative">
      <input
        disabled={isDisabled}
        {...register(inputValidate.name, {
          ...inputValidate.validate,
          value: inputValue,
        })}
        id="small_filled"
        placeholder={inputValue}
        className={clsx(
          'peer block rounded-lg px-12 pt-4 max:pt-3 pb-8 max:pb-6 w-full border-2 focus:outline-none',
          errorMessage &&
            'bg-fields_bg_error border border-fields_stroke_error',
          isDisabled && 'text-text_grey'
        )}
        type="text"
      />
      <Label labelName={inputValidate.labelName} isDisabled={isDisabled} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
