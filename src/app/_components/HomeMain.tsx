'use client';

import { useHomeTabStore } from '@/store/home';
import CafeList from './cafe/CafeList';
import ReviewList from './review/ReviewList';
import ScrapList from './scrap/ScrapList';

export default function HomeMain() {
  const tabName = useHomeTabStore((state) => state.tabName);

  const isReviewList = tabName === '추천';
  const isCafeList = tabName === '카페';
  const isScrapList = tabName === '스크랩';

  return (
    <>
      {isReviewList && <ReviewList />}
      {isCafeList && <CafeList />}
      {isScrapList && <ScrapList />}
    </>
  );
}
