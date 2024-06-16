import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';
import Icon from '../Icon';

export default function HeaderLogo() {
  return (
    <Link href={ROUTE_PATH.HOME} className="hover:cursor-pointer p-1">
      <h1>
        <Icon name="logo_secondary" size={32} />
      </h1>
    </Link>
  );
}
