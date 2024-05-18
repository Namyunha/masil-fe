const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export { API_BASE_URL };

export const SUCCESS_CODE = {
  OK: 200,
  CREATED: 201,
};

export const ERROR_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export const END_POINT = {
  AUTH: {
    SIGNIN: 'api/signin',
    SIGNUP: 'api/signup',
  },
};
