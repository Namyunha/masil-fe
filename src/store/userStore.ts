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

interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}
export declare let File: {
  prototype: File;
  new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

export type userInfo = {
  id: string;
  pw: string;
  nickName: string;
};

type useRegisterStoreProps = {
  imageFile: File | undefined;
  isAgreed: boolean;
  email: string;
  userInfo: userInfo;
  fileName: string;
  currentMessage: string;
  setAgree: () => void;
  setEmail: (emailData: string) => void;
  setUserInfo: (userData: userInfo) => void;
  setFileName: (fileName: string) => void;
  setCurrentMessage: (message?: string) => void;
  setImageFile: (imageFile: File) => void;
};

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
