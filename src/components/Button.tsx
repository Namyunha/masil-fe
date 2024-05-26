'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/className';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  type = 'button',
  className,
  variant,
  shape,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={cn(buttonVariants({ variant, shape, size }), className)}
    />
  );
}

const buttonVariants = cva(``, {
  variants: {
    variant: {
      primary: 'bg-brown text-white',
      cancel: 'bg-red text-white',
      more: 'bg-transparent text-black',
    },
    shape: {
      primary: 'rounded',
      square: 'rounded-none',
      full: 'rounded-full',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-6',
      large: 'text-lg py-3 px-6',
    },
  },
  defaultVariants: {
    variant: 'primary',
    shape: 'primary',
    size: 'medium',
  },
});
