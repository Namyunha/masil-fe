export const id_regex = {
  value: /^[a-zA-Z][0-9a-zA-Z]{4,7}$/,
  message: '영문자 또는 숫자 4~7자 입력',
};
export const pw_regex = {
  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{5,20}$/,
  message: '영문자, 숫자, 특수기호가 포함된 5~20자로 입력해주세요',
};
export const email_regex = {
  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: '이메일의 형식이 올바르지 않습니다.',
};
