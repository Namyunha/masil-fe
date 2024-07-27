import { create } from 'zustand';
import { TagsKey } from '@/types/review';
import {
  ProfileTabState,
  ProgressState,
  useRegisterStoreProps,
  UserSettingState,
  ValidateState,
} from '@/types/user';

export const validateCondition = create<ValidateState>((set) => ({
  confirmState: false,
  validateNum: '',
  validateStatus: false,
  agreement: false,
  setConfirmState: (data) => set(() => ({ confirmState: data })),
  setValidateNum: (data) => set(() => ({ validateNum: data })),
  setValidateStatus: () => set(() => ({ validateStatus: true })),
  setAgreement: (data) => set(() => ({ agreement: data })),
  resetValidation: () =>
    set(() => ({
      confirmState: false,
      validateNum: '',
      validateStatus: false,
      agreement: false,
    })),
}));

export const progressCondition = create<ProgressState>((set) => ({
  currentProgress: 1,
  setProgressCondition: (data) => set(() => ({ currentProgress: data })),
}));

type reviewState = {
  content: string;
  setContent: (data: string) => void;
  rate: number;
  setRate: (data: number) => void;
  writeMode: boolean;
  switchWriteMode: () => void;
  cafeLoca: string;
  setCafeLoca: (loca: string) => void;
  likeCategory: TagsKey[];
  setLikeCategory: (data: TagsKey[]) => void;
  imgFiles: string[];
  setImgFiles: (files: string[]) => void;
  cafeName: string;
  setCafeName: (loca: string) => void;
  searchLoca: boolean;
  switchSearchLoca: () => void;
  modalState: boolean;
  setModalState: () => void;
  setResetPlaceState: () => void;
  setResetReviewState: () => void;
};

export const reviewStore = create<reviewState>((set) => ({
  content: '',
  setContent: (data) => set(() => ({ content: data })),
  rate: 0,
  setRate: (data) => set(() => ({ rate: data })),
  imgFiles: [],
  setImgFiles: (data) => set(() => ({ imgFiles: data })),
  likeCategory: [],
  setLikeCategory: (data) => set(() => ({ likeCategory: data })),
  writeMode: true,
  switchWriteMode: () => set((state) => ({ writeMode: !state.writeMode })),
  cafeName: '',
  setCafeName: (data) => set(() => ({ cafeName: data })),
  cafeLoca: '',
  setCafeLoca: (data) => set(() => ({ cafeLoca: data })),
  modalState: false,
  setModalState: () => set((state) => ({ modalState: !state.modalState })),
  searchLoca: false,
  switchSearchLoca: () => set((state) => ({ searchLoca: !state.searchLoca })),
  setResetPlaceState: () =>
    set(() => ({ rate: 0, likeCategory: [], cafeLoca: '' })),
  setResetReviewState: () =>
    set(() => ({
      content: '',
      rate: 0,
      imgFiles: [],
      likeCategory: [],
      writeMode: true,
      cafeName: '',
      cafeLoca: '',
      modalState: false,
      searchLoca: false,
    })),
}));

export const settingList = create<UserSettingState>((set) => ({
  currentSettingCategory: '설정',
  setSettingCategory: (data) => set(() => ({ currentSettingCategory: data })),
}));

export const profileTabState = create<ProfileTabState>((set) => ({
  tabState: '작성한 리뷰',
  setTabState: (data) => set(() => ({ tabState: data })),
}));

export const userRegisterStore = create<useRegisterStoreProps>((set) => ({
  email: '',
  pw: '',
  userInfo: {
    profileImg: '',
    nickName: '',
  },
  setEmail: (emailData) => set(() => ({ email: emailData })),
  setUserInfo: (userData) =>
    set(() => ({
      userInfo: { ...userData },
    })),
  setPw: (pw) => set(() => ({ pw: pw })),
  resetProfile: () =>
    set(() => ({
      email: '',
      pw: '',
      userInfo: {
        profileImg: '',
        nickName: '',
      },
    })),
}));
