import { RegisterOptions } from 'react-hook-form';

export type formInputs = {
  email: string;
  nickName: string;
  pw: string;
  profileImg: string;
  img: File[];
  validateNum: string;
};

export type inputValidate = {
  name: keyof formInputs;
  validate: RegisterOptions<formInputs>;
  labelName: string;
};
