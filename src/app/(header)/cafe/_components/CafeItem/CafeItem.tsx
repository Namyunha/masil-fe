import { useRouter } from 'next/navigation';
import { ROUTE_PATH } from '@/constants/route';
import { CafeItemType } from '@/types/cafe';
import CafeItemImages from './CafeItemImages';
import CafeItemRating from './CafeItemRating';
import CafeItemSubInfo from './CafeItemSubInfo';
import CafeItemTags from './CafeItemTags';
import CafeItemTitle from './CafeItemTitle';

export default function CafeItem({ ...cafeInfo }: CafeItemType) {
  const router = useRouter();

  const onClickCafeItem = () => {
    router.push(ROUTE_PATH.CAFE_DETAIL(cafeInfo.cafeId));
  };

  return (
    <li
      className="flex flex-col gap-16 p-16 rounded-2xl shadow-elevation2 cursor-pointer"
      onClick={onClickCafeItem}
      tabIndex={0}>
      <CafeItemTitle cafeName={cafeInfo.cafeName} />
      <CafeItemSubInfo cafeLoca={cafeInfo.cafeLoca} />
      <CafeItemRating
        rating={cafeInfo.rating}
        reviewCount={cafeInfo.reviewCount}
      />
      <CafeItemImages cafeImageUrls={cafeInfo.cafeImageUrls} />
      <CafeItemTags tags={cafeInfo.tags} />
    </li>
  );
}
