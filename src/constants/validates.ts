export const id_regex = {
  value: /^[a-zA-Z][0-9a-zA-Z]{4,7}$/,
  message: '영문자 또는 숫자 4~7자 입력',
};
export const pw_regex = {
  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
  message: '영문 숫자 조합 8자리 이상',
};
