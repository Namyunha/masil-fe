import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDE_NAV_LIST } from '@/constants/sideNavBar';

type SideNavBarMainProps = {
  closeHandler: () => void;
};

export default function SideNavBarList({ closeHandler }: SideNavBarMainProps) {
  const pathname = usePathname();

  const isActivePage = (path: string) => pathname === path;
  const getListClassName = (path: string) => {
    return clsx('border-b border-button_bg_disabled text-button_bg_disabled', {
      ['border-primary text-primary']: isActivePage(path),
    });
  };

  // Todo: 다른 페이지 작업 완료되면 route 경로 변경
  // Todo: 유저 정보 작업 완료되면 비회원시 회원가입, 로그인 링크 추가
  return (
    <ul className="flex flex-col gap-1 text-20 text-right">
      {SIDE_NAV_LIST.map((item) => (
        <li key={item.routePath} className={getListClassName(item.routePath)}>
          <Link
            href={item.routePath}
            className="block p-8 font-bold"
            onClick={closeHandler}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
