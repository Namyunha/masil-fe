'use client';

import { cva } from 'class-variance-authority';
import { useHomeTabStore } from '@/store/home';
import { HomeTabNameType } from '@/types/home';
import { cn } from '@/utils/className';

type HomeTabButtonProps = {
  name: HomeTabNameType;
};

export default function HomeTabButton({ name }: HomeTabButtonProps) {
  const tabName = useHomeTabStore((state) => state.tabName);
  const updateTabName = useHomeTabStore((state) => state.updateTabName);

  const onClickTabBtn = () => {
    updateTabName(name);
  };

  const activateState = tabName === name ? 'activate' : 'inactivate';

  return (
    <li>
      <button
        className={cn(linkVariants({ state: activateState }))}
        onClick={onClickTabBtn}>
        {name}
      </button>
    </li>
  );
}

const linkVariants = cva(`font-bold text-text_disabled`, {
  variants: {
    state: {
      activate: 'text-text_black',
      inactivate: 'text-text_disabled',
    },
  },
  defaultVariants: {
    state: 'inactivate',
  },
});
