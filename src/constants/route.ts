export const ROUTE_PATH = {
  HOME: '/',
  MY_PAGE: '/mypage',
  WRITE: '/write',
  CAFE: '/cafe',
  SCRAP: '/scrap',
  SIGNIN: '/login',
  SIGNOUT: '/logout',
  SIGNUP: '/register',
  REVIEW_DETAIL: (reviewId: string) => `/review/${reviewId}`,
};
