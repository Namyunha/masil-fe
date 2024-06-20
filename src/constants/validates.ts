export const id_regex = {
  value: /^[a-zA-Z][0-9a-zA-Z]{4,7}$/,
  message: '영문자 또는 숫자 4~7자 입력',
};
export const pw_regex = {
  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
  message: '영문 숫자 조합 8자리 이상',
};
export const email_regex = {
  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: '이메일의 형식이 올바르지 않습니다.',
};
