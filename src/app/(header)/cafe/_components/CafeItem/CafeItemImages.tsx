import Image from 'next/image';
import { CafeItemType } from '@/types/cafe';

type CafeItemImagesProps = Pick<CafeItemType, 'cafeImageUrls'>;

export default function CafeItemImages({ cafeImageUrls }: CafeItemImagesProps) {
  return (
    <ul className="flex gap-8 h-36 overflow-hidden">
      {!!cafeImageUrls.length &&
        cafeImageUrls.map((img) => (
          <li
            key={img.id}
            className="relative basis-1/3 rounded-md overflow-hidden">
            <Image
              src={img.url}
              alt={img.url}
              fill={true}
              // Todo: 이미지 사이즈 최적화하기
              sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
              className="object-cover"
              priority
            />
          </li>
        ))}
    </ul>
  );
}
