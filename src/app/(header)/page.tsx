import HomeReview from '@/app/_components/HomeReview';
import HomeFAB from '../_components/HomeFAB';
import HomeRecommend from '../_components/HomeRecommend';

export default function Home() {
  // Memo: top button 추가할지 기획에게 문의하기
  return (
    <main className="flex flex-col gap-32 p-16">
      <HomeRecommend />
      <HomeReview />
      <HomeFAB />
    </main>
  );
}
