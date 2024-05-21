import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';

export default function HeaderLogo() {
  return (
    <Link href={ROUTE_PATH.HOME} className="hover:cursor-pointer">
      <h1>masil</h1>
    </Link>
  );
}
