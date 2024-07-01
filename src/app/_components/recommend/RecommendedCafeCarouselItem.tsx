import { useRouter } from 'next/navigation';
import { ROUTE_PATH } from '@/constants/route';
import { RecommendedCafeType } from '@/types/cafe';
import RecommendedCafeImage from './RecommendedCafeImage';
import RecommendedCafeInfo from './RecommendedCafeInfo';

type RecommendedCafeCarouselItemProps = RecommendedCafeType;

export default function RecommendedCafeCarouselItem({
  ...props
}: RecommendedCafeCarouselItemProps) {
  const router = useRouter();
  const onClickRecommendedCafe = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    router.push(ROUTE_PATH.CAFE_DETAIL(props.cafeId));
  };

  return (
    <li
      className="flex gap-8 p-16 min-w-full cursor-pointer"
      key={props.cafeId}
      onClick={(e) => onClickRecommendedCafe(e)}>
      <RecommendedCafeImage
        cafeImageUrl={props.cafeImageUrl}
        cafeName={props.cafeName}
      />
      <div className="flex flex-col justify-between">
        <RecommendedCafeInfo
          cafeLoca={props.cafeLoca}
          cafeName={props.cafeName}
          rating={props.rating}
          tag={props.tag}
        />
      </div>
    </li>
  );
}
