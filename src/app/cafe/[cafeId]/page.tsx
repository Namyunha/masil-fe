import { getCafeDetail } from '@/api/server';
import DetailHeader from '@/components/Header/DetailHeader';
import CafeDetailImages from './_components/CafeDetailImages';
import CafeDetailMainInfo from './_components/CafeDetailMainInfo';
import CafeDetailMap from './_components/CafeDetailMap';
import CafeDetailSubInfo from './_components/CafeDetailSubInfo';
import ErrorComponent from './error';

type CafeDetailProps = {
  params: {
    cafeId: string;
  };
};

export default async function CafeDetail({ params }: CafeDetailProps) {
  const { cafeId } = params;
  const { data, error } = await getCafeDetail(cafeId);
  const cafeInfo = data!.data.cafeInfo;

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  return (
    <div className="h-full">
      <DetailHeader />
      <main className="flex flex-col gap-32 px-16 pb-32">
        <CafeDetailImages cafeImages={cafeInfo.cafeImages} />
        <CafeDetailMainInfo
          cafeId={+cafeId}
          cafeName={cafeInfo.cafeName}
          cafeLoca={cafeInfo.cafeLoca}
          cafeRating={cafeInfo.cafeRating}
          reviewCount={cafeInfo.reviewCount}
          isLike={cafeInfo.isLike}
        />
        <CafeDetailSubInfo
          // cafeTime={cafeInfo.cafeTime}
          cafePhone={cafeInfo.cafePhone}
          cafeUrl={cafeInfo.cafeUrl}
          cafePR={cafeInfo.cafePR}
        />
        <CafeDetailMap
          cafeLocax={cafeInfo.cafeLocax}
          cafeLocay={cafeInfo.cafeLocay}
        />
      </main>
    </div>
  );
}
