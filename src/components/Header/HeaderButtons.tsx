import { cookies } from 'next/headers';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/route';

export default function HeaderButtons() {
  const cookieStore = cookies();
  const currentUser = cookieStore.get('currentUser');
  console.log('currentUser = ', currentUser);
  return (
    <div className="flex gap-2">
      {currentUser ? (
        <Link href={ROUTE_PATH.SIGNOUT} className="hover:cursor-pointer">
          로그아웃
        </Link>
      ) : (
        <Link href={ROUTE_PATH.SIGNIN} className="hover:cursor-pointer">
          로그인
        </Link>
      )}
      <Link href={ROUTE_PATH.SIGNUP} className="hover:cursor-pointer">
        회원가입
      </Link>
    </div>
  );
}
