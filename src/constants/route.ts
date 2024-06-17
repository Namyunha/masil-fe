export const ROUTE_PATH = {
  HOME: '/',
  SIGNIN: '/login',
  SIGNOUT: '/logout',
  SIGNUP: '/register',
  WRITE: '/write',
  CAFE: '/cafe',
  SCRAP: '/scrap',
  REVIEW_DETAIL: (reviewId: string) => `/review/${reviewId}`,
};
