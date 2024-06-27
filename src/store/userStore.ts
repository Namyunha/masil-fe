import { create } from 'zustand';
import {
  ProgessState,
  useRegisterStoreProps,
  ValidateState,
} from '@/types/user';

export const validateCondition = create<ValidateState>((set) => ({
  confirmState: false,
  validateNum: '',
  setValidateState: () =>
    set((state) => ({ confirmState: !state.confirmState })),
  setValidateNum: (data) => set(() => ({ validateNum: data })),
}));

export const progessCondition = create<ProgessState>((set) => ({
  currentProgess: 1,
  setProgessCondition: (data) => set(() => ({ currentProgess: data })),
}));

export const useRegisterStore = create<useRegisterStoreProps>((set) => ({
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
  setprofileImg: (img) => set(() => ({ profileImg: img })),
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
