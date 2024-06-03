import { TAB_LIST } from '@/constants/home';
import HomeTabButton from './HomeTabButton';

export default function HomeTab() {
  return (
    <nav>
      <ul className="flex gap-2">
        {TAB_LIST.map((tab) => (
          <HomeTabButton key={tab} name={tab} />
        ))}
      </ul>
    </nav>
  );
}
