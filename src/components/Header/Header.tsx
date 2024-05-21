import HeaderButtons from './HeaderButtons';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <header className="flex justify-between px-2 py-2 mobile:px-1 mobile:py-1 text-white bg-brown">
      <HeaderLogo />
      <HeaderButtons />
    </header>
  );
}
