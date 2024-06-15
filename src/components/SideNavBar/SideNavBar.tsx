import clsx from 'clsx';
import Dim from '../Dim';
import SideNavBarHeader from './SideNavBarHeader';
import SideNavBarList from './SideNavBarList';

type SideNavBarProps = {
  isOpen: boolean;
  closeHandler: () => void;
};

export default function SideNavBar({ isOpen, closeHandler }: SideNavBarProps) {
  return (
    <>
      {isOpen && <Dim closeHandler={closeHandler} />}
      <nav
        className={clsx(
          'fixed top-0 right-0 z-modal w-[70vw] h-screen px-16 py-8 flex flex-col gap-32 bg-bg_white transition-transform duration-300',
          {
            ['translate-x-0']: isOpen,
            ['translate-x-full']: !isOpen,
          }
        )}>
        <SideNavBarHeader closeHandler={closeHandler} />
        <SideNavBarList closeHandler={closeHandler} />
      </nav>
    </>
  );
}
