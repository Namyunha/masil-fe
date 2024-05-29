import { create } from 'zustand';

interface ModalState {
  modalStatus: boolean;
  changeStatus: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  modalStatus: false,
  changeStatus: () => set((state) => ({ modalStatus: !state.modalStatus })),
}));
