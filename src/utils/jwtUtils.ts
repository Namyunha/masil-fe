import jwt from 'jsonwebtoken';

const token = jwt.sign(
  {
    data: 'foobar',
  },
  'secret',
  {
    algorithm: 'HS256', // 암호화 알고리즘
    expiresIn: '1h', // 유효기간
  }
);

// access Token 발급
const sign = (userId: string) => {
  return token;
};

// access Token 검증
const verify = (token: string) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, 'secret');
    return {
      ok: true,
      userId: decoded.id,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};
// refresh Token 발급
const refresh = (userId: string) => {
  return jwt.sign({ id: userId }, 'secret', {
    algorithm: 'HS256',
    expiresIn: '14d', // 유효기간
  });
};

const refreshVerify = (token: string) => {
  try {
    jwt.verify(token, 'secret');
    return true;
  } catch (error) {
    return false;
  }
};

export { refresh, refreshVerify, sign, verify };
