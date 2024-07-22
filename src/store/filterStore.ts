import { create } from 'zustand';
import {
  DEFAULT_LOCATION,
  DEFAULT_SORTING,
  DEFAULT_TAG,
  MAX_FILTER_COUNT,
  NO_FILTER_COUNT,
} from '@/constants/reviewFilter';
import { LocationKey, SortingKey, TagsKey } from '@/types/review';

type FilterStoreType = {
  activeSorting: SortingKey;
  activeTags: TagsKey[];
  activeLocation: LocationKey;
  resetFilter: () => void;
  toggleSorting: (newSorting: SortingKey) => void;
  toggleTag: (tag: TagsKey) => void;
  toggleLocation: (location: LocationKey) => void;
};

export const useFilterStore = create<FilterStoreType>((set) => ({
  activeSorting: DEFAULT_SORTING,
  activeTags: [DEFAULT_TAG],
  activeLocation: DEFAULT_LOCATION,

  resetFilter: () =>
    set({
      activeSorting: DEFAULT_SORTING,
      activeTags: [DEFAULT_TAG],
      activeLocation: DEFAULT_LOCATION,
    }),

  toggleSorting: (sorting) =>
    set((state) => {
      const isAlreadyActive = state.activeSorting === sorting;

      if (isAlreadyActive) {
        return { activeSorting: DEFAULT_SORTING };
      }

      return { activeSorting: sorting };
    }),

  toggleTag: (tag) =>
    set((state) => {
      const newActiveTags = new Set(state.activeTags);
      const isNoFilter = tag === DEFAULT_TAG;
      const isAlreadyExist = newActiveTags.has(tag);
      const isFull = newActiveTags.size === MAX_FILTER_COUNT;

      if (isNoFilter) {
        return { activeTags: [DEFAULT_TAG] };
      }

      if (isFull && !isAlreadyExist) {
        return { activeTags: state.activeTags };
      }

      if (isAlreadyExist) {
        newActiveTags.delete(tag);
      } else {
        newActiveTags.add(tag);
      }

      const isEmpty = newActiveTags.size === NO_FILTER_COUNT;

      if (isEmpty) {
        newActiveTags.add(DEFAULT_TAG);
      } else {
        newActiveTags.delete(DEFAULT_TAG);
      }

      return { activeTags: Array.from(newActiveTags) };
    }),

  toggleLocation: (location) =>
    set((state) => {
      const isAlreadyActive = state.activeLocation === location;

      if (isAlreadyActive) {
        return { activeLocation: DEFAULT_LOCATION };
      }

      return { activeLocation: location };
    }),
}));

type CafeFilterStoreType = {
  activeTags: TagsKey[];
  activeLocation: LocationKey;
  resetFilter: () => void;
  toggleTag: (tag: TagsKey) => void;
  toggleLocation: (location: LocationKey) => void;
};

export const useCafeFilterStore = create<CafeFilterStoreType>((set) => ({
  activeTags: [DEFAULT_TAG],
  activeLocation: DEFAULT_LOCATION,

  resetFilter: () =>
    set({
      activeTags: [DEFAULT_TAG],
      activeLocation: DEFAULT_LOCATION,
    }),

  toggleTag: (tag) =>
    set((state) => {
      const newActiveTags = new Set(state.activeTags);
      const isNoFilter = tag === DEFAULT_TAG;
      const isAlreadyExist = newActiveTags.has(tag);
      const isFull = newActiveTags.size === MAX_FILTER_COUNT;

      if (isNoFilter) {
        return { activeTags: [DEFAULT_TAG] };
      }

      if (isFull && !isAlreadyExist) {
        return { activeTags: state.activeTags };
      }

      if (isAlreadyExist) {
        newActiveTags.delete(tag);
      } else {
        newActiveTags.add(tag);
      }

      const isEmpty = newActiveTags.size === NO_FILTER_COUNT;

      if (isEmpty) {
        newActiveTags.add(DEFAULT_TAG);
      } else {
        newActiveTags.delete(DEFAULT_TAG);
      }

      return { activeTags: Array.from(newActiveTags) };
    }),

  toggleLocation: (location) =>
    set((state) => {
      const isAlreadyActive = state.activeLocation === location;

      if (isAlreadyActive) {
        return { activeLocation: DEFAULT_LOCATION };
      }

      return { activeLocation: location };
    }),
}));
