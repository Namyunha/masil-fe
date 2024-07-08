export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const SERVER_API_BASE_URL = process.env.NEXT_SERVER_API_BASE_URL;

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
  USER: {
    SIGNIN: 'user/sign-in',
    SIGNUP: 'api/user',
  },
  REVIEW: {
    LIST: '/review',
    DETAIL: (reviewId: string) => `/api/review/${reviewId}`,
    LIKE: '/like',
    COMMENT: (reviewId: string) => `/review/comment/${reviewId}`,
  },
  CAFE: {
    RECOMMEND: '/cafes/rec',
  },
};

export const DEFAULT_CURSOR = 0;
export const DEFAULT_SIZE = 5;
