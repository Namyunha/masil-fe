import Icon from '@/components/Icon/Icon';
import { CafeDetailType } from '@/types/cafe';

type CafeDetailSubInfoProps = Pick<
  CafeDetailType,
  // 'cafeTime' |
  'cafePhone' | 'cafeUrl' | 'cafePR'
>;

export default function CafeDetailSubInfo({
  // cafeTime,
  cafePhone,
  cafeUrl,
  cafePR,
}: CafeDetailSubInfoProps) {
  return (
    <div className="flex flex-col gap-16">
      <div className="text-16 font-bold">상세 정보</div>
      <div className="flex flex-col gap-12">
        {/* Memo: 백엔드 데이터 확인 후 주석 해제 */}
        {/* <div className="flex gap-6 items-center text-14">
          <Icon name="time" size={24} />
          {cafeTime}
        </div> */}
        <div className="flex gap-6 items-center text-14 text-text_grey">
          <Icon name="phone" size={24} />
          {cafePhone}
        </div>
        <div className="flex gap-6 items-center text-14 text-text_grey">
          <Icon name="internet" size={24} />
          <a href={cafeUrl}>홈페이지 바로 가기</a>
        </div>
        <div className="flex gap-6 items-center text-14 break-keep">
          <Icon name="store" size={24} />
          {cafePR}
        </div>
      </div>
    </div>
  );
}
