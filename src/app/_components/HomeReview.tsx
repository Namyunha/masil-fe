import ReviewFilter from './review/ReviewFilter';
import ReviewList from './review/ReviewList';

export default function HomeReview() {
  return (
    <section className="flex flex-col gap-16">
      <h2 className="text-18 font-bold">마실에서만 보는 리뷰</h2>
      <ReviewFilter />
      <ReviewList />
    </section>
  );
}
