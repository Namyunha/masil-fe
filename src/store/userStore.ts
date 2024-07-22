import { create } from 'zustand';
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
