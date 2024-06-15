import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTE_PATH } from '@/constants/route';

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
  return (
    <ul className="flex flex-col gap-1 text-20 text-right">
      <li className={getListClassName(ROUTE_PATH.HOME)}>
        <Link
          href={ROUTE_PATH.HOME}
          className="block p-8 font-bold"
          onClick={closeHandler}>
          리뷰
        </Link>
      </li>
      <li className={getListClassName(ROUTE_PATH.CAFE)}>
        <Link
          href={ROUTE_PATH.CAFE}
          className="block p-8 font-bold"
          onClick={closeHandler}>
          카페
        </Link>
      </li>
      <li className={getListClassName(ROUTE_PATH.SCRAP)}>
        <Link
          href={ROUTE_PATH.SCRAP}
          className="block p-8 font-bold"
          onClick={closeHandler}>
          스크랩
        </Link>
      </li>
      <li className={getListClassName(ROUTE_PATH.MY_PAGE)}>
        <Link
          href={ROUTE_PATH.MY_PAGE}
          className="block p-8 font-bold"
          onClick={closeHandler}>
          마이페이지
        </Link>
      </li>
      <li className={getListClassName(ROUTE_PATH.WRITE)}>
        <Link
          href={ROUTE_PATH.WRITE}
          className="block p-8 font-bold"
          onClick={closeHandler}>
          리뷰 작성하기
        </Link>
      </li>
    </ul>
  );
}
