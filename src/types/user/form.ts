import { RegisterOptions } from 'react-hook-form';
import { TagsKey } from '../review';

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

export type reviewFormInputs = {
  content: string;
  img: File[];
  rate: string;
  tags: TagsKey[];
};
