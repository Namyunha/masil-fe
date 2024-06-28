import { ObjectId } from 'mongodb';

export type ModalState = {
  modalStatus: boolean;
  changeStatus: () => void;
};

export type ValidateState = {
  validateNum: string;
  confirmState: boolean;
  validateStatus: boolean;
  setValidateState: () => void;
  setValidateNum: (data: string) => void;
  setValidateStatus: () => void;
};

export type ProgessState = {
  currentProgess: number;
  setProgessCondition: (data: number) => void;
};

export type userInfo = {
  pw: string;
  nickName: string;
};

export type useRegisterStoreProps = {
  email: string;
  profileImg: string;
  userInfo: userInfo;
  agreement: boolean;
  setEmail: (emailData: string) => void;
  setUserInfo: (userData: userInfo) => void;
  setprofileImg: (img: string) => void;
  setAgreement: (data: boolean) => void;
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
  email: string;
  pw: string;
  nickName: string;
  profileImg: string;
};

export type dbUserProps = {
  [key: string]: string;
};
