import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';

export default function HeaderButtons() {
  return (
    <div className="flex gap-2">
      <Link href={ROUTE_PATH.SIGNIN} className="hover:cursor-pointer">
        로그인
      </Link>
      <Link href={ROUTE_PATH.SIGNUP} className="hover:cursor-pointer">
        회원가입
      </Link>
    </div>
  );
}
