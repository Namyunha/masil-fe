import { ObjectId } from 'mongodb';

export type ModalState = {
  modalStatus: boolean;
  changeStatus: () => void;
};

export type ValidateState = {
  validateNum: string;
  confirmState: boolean;
  validateStatus: boolean;
  agreement: boolean;
  setConfirmState: (data: boolean) => void;
  setValidateNum: (data: string) => void;
  setValidateStatus: () => void;
  setAgreement: (data: boolean) => void;
};

export type ProgressState = {
  currentProgress: number;
  setProgressCondition: (data: number) => void;
};

export type userInfo = {
  pw: string;
  nickName: string;
};

export type useRegisterStoreProps = {
  email: string;
  profileImg: string;
  userInfo: userInfo;
  setEmail: (emailData: string) => void;
  setUserInfo: (userData: userInfo) => void;
  setProfileImg: (img: string) => void;
  resetProfile: () => void;
};

export type dbUserData = {
  _id: ObjectId;
  id: string;
  pw: string;
  nickName: string;
  email: string;
  fileName: string;
  currentMessage: string;
};

export type userData = {
  _id: number;
  email: string;
  pw: string;
  nickName: string;
  profileImg: string;
};

export type dbUserProps = {
  [key: string]: string;
};
