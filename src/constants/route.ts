export const ROUTE_PATH = {
  HOME: '/',
  SIGNIN: '/SignIn',
  SIGNUP: '/SignUp',
  WRITE: '/write',
  CAFE: '/cafe',
  SCRAP: '/scrap',
  REVIEW_DETAIL: (reviewId: string) => `/review/${reviewId}`,
};
