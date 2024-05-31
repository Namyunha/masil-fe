import { create } from 'zustand';

type ModalState = {
  modalStatus: boolean;
  changeStatus: () => void;
};

export const useModalStore = create<ModalState>()((set) => ({
  modalStatus: false,
  changeStatus: () => set((state) => ({ modalStatus: !state.modalStatus })),
}));

type ValidateState = {
  certification: string;
  setCertification: (date: string) => void;
};

export const useValidate = create<ValidateState>()((set) => ({
  certification: '',
  setCertification: (data) => set(() => ({ certification: data })),
}));
