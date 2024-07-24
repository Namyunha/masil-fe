import Image from 'next/image';
import { TAGS } from '@/constants/reviewFilter';

type IconProps = {
  name: keyof typeof TAGS;
};

export default function TagIcon({ name }: IconProps) {
  return (
    <Image
      src={`/icon/tags/${name}.png`}
      alt={name}
      width={16}
      height={16}
      style={{
        width: 16,
        height: 16,
      }}
    />
  );
}
