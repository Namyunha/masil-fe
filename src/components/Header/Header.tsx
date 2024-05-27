import HeaderButtons from './HeaderButtons';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <header className="flex justify-between px-2 py-2 text-text_white bg-primary">
      <HeaderLogo />
      <HeaderButtons />
    </header>
  );
}
