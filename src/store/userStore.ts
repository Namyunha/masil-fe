import { create } from 'zustand';
import {
  ProgressState,
  useRegisterStoreProps,
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
}));

export const progressCondition = create<ProgressState>((set) => ({
  currentProgress: 1,
  setProgressCondition: (data) => set(() => ({ currentProgress: data })),
}));

export const userRegisterStore = create<useRegisterStoreProps>((set) => ({
  email: '',
  profileImg: '',
  userInfo: {
    pw: '',
    nickName: '',
  },
  setEmail: (emailData) => set(() => ({ email: emailData })),
  setUserInfo: (userData) =>
    set(() => ({
      userInfo: { ...userData },
    })),
  setProfileImg: (img) => set(() => ({ profileImg: img })),
  resetProfile: () =>
    set(() => ({
      email: '',
      profileImg: '',
      userInfo: {
        pw: '',
        nickName: '',
      },
    })),
}));
