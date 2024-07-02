import { create } from 'zustand';
import {
  ProgessState,
  useRegisterStoreProps,
  ValidateState,
} from '@/types/user';

export const validateCondition = create<ValidateState>((set) => ({
  confirmState: false,
  validateNum: '',
  validateStatus: false,
  setValidateState: (data) => set(() => ({ confirmState: data })),
  setValidateNum: (data) => set(() => ({ validateNum: data })),
  setValidateStatus: () => set(() => ({ validateStatus: true })),
}));

export const progessCondition = create<ProgessState>((set) => ({
  currentProgess: 1,
  setProgessCondition: (data) => set(() => ({ currentProgess: data })),
}));

export const useRegisterStore = create<useRegisterStoreProps>((set) => ({
  email: '',
  profileImg: '',
  agreement: false,
  userInfo: {
    pw: '',
    nickName: '',
  },
  setEmail: (emailData) => set(() => ({ email: emailData })),
  setUserInfo: (userData) =>
    set(() => ({
      userInfo: { ...userData },
    })),
  setprofileImg: (img) => set(() => ({ profileImg: img })),
  setAgreement: (data) => set(() => ({ agreement: data })),
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
