import { useEffect } from 'react';

type UseBlockScrollYProps = {
  isBlock: boolean;
};

export default function useBlockScrollY({ isBlock }: UseBlockScrollYProps) {
  useEffect(() => {
    const mainScreen = document.querySelector('.main-screen') as HTMLElement;

    if (isBlock && mainScreen) {
      mainScreen.style.overflowY = 'hidden';
    } else if (mainScreen) {
      mainScreen.style.overflowY = 'auto';
    }

    return () => {
      if (mainScreen) {
        mainScreen.style.overflowY = 'auto';
      }
    };
  }, [isBlock]);
}
