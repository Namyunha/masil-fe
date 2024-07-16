import HeaderLogo from './HeaderLogo';
import HeaderNavButton from './HeaderNavButton';

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between z-dim px-16 py-8 bg-bg_white shadow-elevation1">
      <HeaderLogo />
      <HeaderNavButton />
    </header>
  );
}
