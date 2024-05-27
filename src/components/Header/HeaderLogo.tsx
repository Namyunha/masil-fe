import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import Icon from '../Icon';

export default function HeaderLogo() {
  return (
    <Link href={ROUTE_PATH.HOME} className="hover:cursor-pointer">
      <h1>
        <Icon name="logo" />
      </h1>
    </Link>
  );
}
