import HeaderLogo from './HeaderLogo';
import HeaderNavButton from './HeaderNavButton';

export default function Header() {
  return (
    <header className="flex justify-between px-16 py-8">
      <HeaderLogo />
      <HeaderNavButton />
    </header>
  );
}
