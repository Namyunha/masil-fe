import { RegisterOptions } from 'react-hook-form';

export type formInputs = {
  email: string;
  nickName: string;
  pw: string;
  img: File[];
};

export type inputValidate = {
  name: keyof formInputs;
  validate: RegisterOptions<formInputs>;
  labelName: string;
};
