import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import HeaderIcon from './HeaderIcon';

export default function HeaderLogo() {
  return (
    <Link href={ROUTE_PATH.HOME} className="hover:cursor-pointer p-1">
      <HeaderIcon />
    </Link>
  );
}
