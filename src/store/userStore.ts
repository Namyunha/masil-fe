import { create } from 'zustand';
import { ModalState, useRegisterStoreProps, ValidateState } from '@/types/user';

export const useModalStore = create<ModalState>((set) => ({
  modalStatus: false,
  changeStatus: () => set((state) => ({ modalStatus: !state.modalStatus })),
}));

export const useValidate = create<ValidateState>((set) => ({
  certification: '',
  setCertification: (data) => set(() => ({ certification: data })),
  nextCheck: false,
  setNextCheck: () => set(() => ({ nextCheck: true })),
}));

export const useRegisterStore = create<useRegisterStoreProps>((set) => ({
  imageFile: undefined,
  isAgreed: false,
  email: '',
  fileName: '',
  currentMessage: '',
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
  setFileName: (fileName) => set(() => ({ fileName: fileName })),
  setCurrentMessage: (message) => set(() => ({ currentMessage: message })),
  setImageFile: (imageFile) => set(() => ({ imageFile: imageFile })),
}));
