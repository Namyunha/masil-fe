'use client';

import { cva, VariantProps } from 'class-variance-authority';
import * as icons from 'public/icon/svg';
import { cn } from '@/utils/className';
import Icon from '../Icon/Icon';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  childrenType?: 'textOnly' | 'leftIcon' | 'rightIcon' | 'iconOnly';
  iconName?: keyof typeof icons;
  text?: string;
};

type ButtonVariantType = VariantProps<typeof buttonVariants>['variant'];
type ButtonSizeType = VariantProps<typeof buttonVariants>['size'];

export default function Button({
  onClick,
  className,
  variant = 'primary',
  size = 'm',
  childrenType = 'textOnly',
  iconName,
  text,
  ...props
}: ButtonProps) {
  const iconFilter = {
    primary: 'WHITE',
    primaryI: 'WHITE',
    secondary: 'PRIMARY',
    secondaryI: 'BLACK',
  } as const;

  const buttonVariant = (
    childrenType === 'iconOnly' ? variant + 'I' : variant
  ) as ButtonVariantType;
  const buttonSize = (
    childrenType === 'iconOnly' ? size + 'I' : size
  ) as ButtonSizeType;

  const isSmallSize = size === 'm' || size === 's' || size === 'xs';
  const iconSize = isSmallSize ? 16 : 24;

  return (
    <button
      onClick={onClick}
      type={props.type ?? 'button'}
      {...props}
      className={cn(
        buttonVariants({
          variant: buttonVariant,
          size: buttonSize,
          childrenType,
        }),
        className
      )}>
      {text}
      {iconName && (
        <Icon
          name={iconName}
          filter={
            props.disabled ? 'GRAY' : iconFilter[buttonVariant ?? 'primary']
          }
          size={iconSize}
        />
      )}
    </button>
  );
}

const buttonVariants = cva(
  `flex justify-center items-center rounded font-bold`,
  {
    variants: {
      variant: {
        primary:
          'bg-button_bg_default disabled:bg-button_bg_disabled text-button_text_default disabled:text-button_text_disabled',
        primaryI:
          'bg-button_icon_only_bg disabled:bg-button_icon_only_bg_disabled rounded-full',
        secondary:
          'bg-button_secondary_bg border border-button_secondary_stroke text-button_secondary_text disabled:bg-button_secondary_bg_disabled disabled:text-button_secondary_text_disabled disabled:border-none',
        secondaryI: 'bg-button_secondary_bg disabled:opacity-10 rounded-full',
      },
      size: {
        xs: 'text-14 px-24 py-8 gap-6',
        s: 'text-14 px-24 py-12 gap-6',
        m: 'text-16 px-32 py-14 gap-8',
        l: 'text-20 px-32 py-16 gap-8',
        xl: 'text-20 px-32 py-20 gap-8',
        xsI: 'p-8',
        sI: 'p-8',
        mI: 'p-12',
        lI: 'p-16',
        xlI: 'p-20',
      },
      childrenType: {
        textOnly: '',
        leftIcon: 'flex-row-reverse',
        rightIcon: '',
        iconOnly: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'm',
      childrenType: 'textOnly',
    },
  }
);
