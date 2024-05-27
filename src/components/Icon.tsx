import Image from 'next/image';
import * as icons from 'public/icon/svg';

type IconProps = {
  name: keyof typeof icons;
  size?: 16 | 24 | 32;
};

export default function Icon({ name, size = 24 }: IconProps) {
  return (
    <Image
      src={`/icon/${name}.svg`}
      alt={name}
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  );
}
