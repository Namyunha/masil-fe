import RecommendedCafeCarousel from './recommend/RecommendedCafeCarousel';

export default function HomeRecommend() {
  return (
    <section className="flex flex-col gap-16">
      <h2 className="text-18 font-bold">유저1 님이 좋아할 카페</h2>
      <RecommendedCafeCarousel />
    </section>
  );
}
