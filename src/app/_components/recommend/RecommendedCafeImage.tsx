import Image from 'next/image';
import { RecommendedCafeType } from '@/types/cafe';

type RecommendedCafeImageProps = Pick<
  RecommendedCafeType,
  'cafeImageUrl' | 'cafeName'
>;

export default function RecommendedCafeImage({
  cafeImageUrl,
  cafeName,
}: RecommendedCafeImageProps) {
  return (
    <div className="relative w-[180px] h-[180px]">
      <Image
        src={cafeImageUrl}
        alt={cafeName}
        fill={true}
        // Todo: 이미지 사이즈 최적화하기
        sizes="(max-width: 732px) 90vw, (max-width: 992px) 45vw, 320px"
        priority
        className="rounded-md object-cover"
      />
    </div>
  );
}
