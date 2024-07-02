import Image from 'next/image';
import * as icons from 'public/icon/svg';
import { FILTER_COLOR } from '@/styles/filterColor';

type IconProps = {
  name: keyof typeof icons | string;
  size?: 8 | 12 | 16 | 24 | 32 | 65 | 185;
  filter?: keyof typeof FILTER_COLOR;
  className?: string;
};

export default function Icon({
  name,
  className,
  size = 24,
  filter,
}: IconProps) {
  return (
    <Image
      src={`/icon/${name}.svg`}
      alt={name}
      className={className}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        filter: filter && FILTER_COLOR[filter],
      }}
    />
  );
}
