import CafeFilter from './CafeFilter/CafeFilter';
import CafeList from './CafeList';

export default function CafeMain() {
  return (
    <div className="flex flex-col gap-16">
      <CafeFilter />
      <CafeList />
    </div>
  );
}
