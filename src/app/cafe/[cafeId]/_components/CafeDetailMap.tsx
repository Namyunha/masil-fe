'use client';

import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { CafeDetailType } from '@/types/cafe';

const KakaoMapComponent = React.lazy(() => import('@/components/KakaoMap'));

type CafeDetailMapProps = Pick<CafeDetailType, 'cafeLocax' | 'cafeLocay'> & {
  mapKey: string | undefined;
};

export default function CafeDetailMap({
  cafeLocax,
  cafeLocay,
  mapKey,
}: CafeDetailMapProps) {
  if (!mapKey) {
    return (
      <div className="flex flex-col gap-16 items-center justify-center w-full h-[200px]">
        <span className="text-16 font-bold text-text_error text-center">
          오류 !
        </span>
        <div className="flex flex-col gap-8 text-14 text-center">
          <span>카카오 맵 api key가 존재하지 않습니다</span>
          <span>페이지 관리자에게 연락주세요</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      <span className="text-16 font-bold">지도</span>
      <Suspense
        fallback={
          <div className="w-full h-[200px]">
            <LoadingSpinner />
          </div>
        }>
        <KakaoMapComponent
          cafeLocax={cafeLocax}
          cafeLocay={cafeLocay}
          mapKey={mapKey}
        />
      </Suspense>
    </div>
  );
}
