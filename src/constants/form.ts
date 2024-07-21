import { email_regex, nickName_regex } from '@/constants/validates';
import { inputValidate } from '@/types/user/form';

export const nickNameInputValidate: inputValidate = {
  name: 'nickName',
  validate: {
    required: '닉네임을 입력해주세요',
    maxLength: nickName_regex,
  },
  labelName: '닉네임(1~20 한,영,특수기호)',
};

export const emailInputValidate: inputValidate = {
  name: 'email',
  validate: {
    required: '이메일을 입력해주세요',
    pattern: email_regex,
  },
  labelName: '이메일 (masil@naver.com)',
};
