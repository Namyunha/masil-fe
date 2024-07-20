import { cva } from 'class-variance-authority';
import React from 'react';
import Button from '@/components/Button';
import { cn } from '@/utils/className';

type ActiveButtonProps = {
  activeClassName?: string;
  errorState: boolean;
  isLoading?: boolean;
  children: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ActiveButton({
  activeClassName,
  errorState,
  isLoading,
  children,
  ...props
}: ActiveButtonProps) {
  const activateButtonProps = cva(``, {
    variants: {
      variant: {
        primary:
          'w-full bg-button_bg_default hover:bg-button_bg_clicked disabled:bg-button_bg_disabled text-button_text_default hover:text-button_text_clicked disabled:text-button_text_disabled',
        gray: 'w-full bg-button_bg_disabled border border-fields_stroke text-button_text_disabled',
      },
    },
    defaultVariants: {
      variant: 'gray',
    },
  });
  return (
    <Button
      disabled={errorState}
      type="submit"
      className={cn(
        activateButtonProps({
          variant: errorState ? 'gray' : 'primary',
        }),
        activeClassName
      )}
      size="m"
      text={children}
    />
  );
}
