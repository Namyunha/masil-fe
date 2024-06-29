import { RecommendedCafeType } from '@/types/cafe';
import RecommendedCafeImage from './RecommendedCafeImage';
import RecommendedCafeInfo from './RecommendedCafeInfo';

type RecommendedCafeCarouselItemProps = RecommendedCafeType;

export default function RecommendedCafeCarouselItem({
  ...props
}: RecommendedCafeCarouselItemProps) {
  return (
    <li className="flex gap-8 p-16 min-w-full" key={props.cafeId}>
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
