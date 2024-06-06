export type ModalState = {
  modalStatus: boolean;
  changeStatus: () => void;
};

export type ValidateState = {
  certification: string;
  setCertification: (date: string) => void;
  nextCheck: boolean;
  setNextCheck: () => void;
};

export type userInfo = {
  id: string;
  pw: string;
  nickName: string;
};

export type useRegisterStoreProps = {
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

// export interface File extends Blob {
//   readonly lastModified: number;
//   readonly name: string;
// }
