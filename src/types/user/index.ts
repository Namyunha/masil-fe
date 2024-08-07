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
  resetValidation: () => void;
};

export type ProgressState = {
  currentProgress: number;
  setProgressCondition: (data: number) => void;
};

export type ProfileTabState = {
  tabState: '작성한 리뷰' | '스크랩한 리뷰';
  setTabState: (data: '작성한 리뷰' | '스크랩한 리뷰') => void;
};

export type UserSettingState = {
  currentSettingCategory: '설정' | '내 프로필' | '회원 탈퇴';
  setSettingCategory: (data: '설정' | '내 프로필' | '회원 탈퇴') => void;
};

export type userInfo = {
  profileImg: string;
  nickName: string;
};

export type useRegisterStoreProps = {
  email: string;
  pw: string;
  userInfo: userInfo;
  setEmail: (emailData: string) => void;
  setUserInfo: (userData: userInfo) => void;
  setPw: (img: string) => void;
  resetProfile: () => void;
};

export type userData = {
  email: string;
  pw: string;
  nickName: string;
  profileImg: string;
};

export type userProps = {
  [key: string]: string;
};
