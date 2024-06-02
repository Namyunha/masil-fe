import HomeMain from '@/app/_components/HomeMain';
import HomeFAB from './_components/HomeFAB';
import HomeFilter from './_components/HomeFilter';
import HomeTab from './_components/HomeTab';

export default function Home() {
  return (
    <main className="flex flex-col p-16 gap-2">
      <HomeTab />
      <HomeFilter />
      <HomeMain />
      <HomeFAB />
    </main>
  );
}
