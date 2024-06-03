import { create } from 'zustand';

type ModalState = {
  modalStatus: boolean;
  changeStatus: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modalStatus: false,
  changeStatus: () => set((state) => ({ modalStatus: !state.modalStatus })),
}));

type ValidateState = {
  certification: string;
  setCertification: (date: string) => void;
  nextCheck: boolean;
  setNextCheck: () => void;
};

export const useValidate = create<ValidateState>((set) => ({
  certification: '',
  setCertification: (data) => set(() => ({ certification: data })),
  nextCheck: false,
  setNextCheck: () => set(() => ({ nextCheck: true })),
}));

export type userInfo = {
  id: string;
  pw: string;
  nickName: string;
};

type useRegisterStoreProps = {
  isAgreed: boolean;
  email: string;
  userInfo: userInfo;
  setAgree: () => void;
  setEmail: (emailData: string) => void;
  setUserInfo: (userData: userInfo) => void;
};

export const useRegisterStore = create<useRegisterStoreProps>((set) => ({
  isAgreed: false,
  email: '',
  userInfo: {
    id: '',
    pw: '',
    nickName: '',
  },
  setAgree: () => set(() => ({ isAgreed: true })),
  setEmail: (emailData) => set(() => ({ email: emailData })),
  setUserInfo: (userData) =>
    set(() => ({
      userInfo: { ...userData },
    })),
}));
