export const ROUTE_PATH = {
  HOME: '/',
  MY_PAGE: '/mypage',
  WRITE: '/write',
  CAFE: '/cafe',
  SIGNIN: '/login',
  SIGNOUT: '/logout',
  SIGNUP: '/register',
  REVIEW_DETAIL: (reviewId: number) => `/review/${reviewId}`,
  CAFE_DETAIL: (cafeId: number) => `/cafe/${cafeId}`,
};
