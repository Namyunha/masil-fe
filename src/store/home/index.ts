import { create } from 'zustand';

type HomeTabStore = {
  tabName: '추천' | '카페' | '스크랩';
  updateTabName: (tabName: '추천' | '카페' | '스크랩') => void;
};

export const useHomeTabStore = create<HomeTabStore>((set) => ({
  tabName: '추천',
  updateTabName: (tabName: '추천' | '카페' | '스크랩') =>
    set(() => ({ tabName })),
}));
