import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import Icon from '../../components/Icon/Icon';

export default function HomeFAB() {
  return (
    <Link
      href={ROUTE_PATH.WRITE}
      className="fixed z-float bottom-24 right-24 hover:cursor-pointer hover:opacity-80">
      <div className="flex justify-center items-center w-48 h-48 rounded-full bg-primary shadow-elevation1">
        <Icon name="write" filter="WHITE" />
      </div>
    </Link>
  );
}
