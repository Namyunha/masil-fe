export const mockReviewDetail = {
  status: 200,
  message: '상세 리뷰 조회 성공',
  data: {
    reviewId: 1,
    userId: 2,
    nickName: '베리',
    profileImageUrl: '/image/test_user.png',
    content: `외국인들도 줄 서서 먹는다는 츄러스 
압구정에 맛있는 카페가 너무 많아서 디저트 덕후는 행복합니다. 세 가지맛 먹었는데 모두 맛있어요!`,
    reviewImageUrls: [
      {
        id: 1,
        url: '/image/test_review_1.png',
      },
      {
        id: 2,
        url: '/image/test_review_2.png',
      },
      {
        id: 3,
        url: '/image/test_review_3.png',
      },
    ],
    rating: 2.5,
    isLike: false,
    likeCount: 12,
    commentCount: 12,
    tags: ['DESSERT', 'COFFEE', 'MONEY', 'COZY'],
    cafeInfo: {
      cafeId: 1,
      cafeName: '미뉴트빠삐용',
      cafeLoca: '서울 강남구 도산대로 51길 37 지하 1층',
      isLike: false,
    },
    createdAt: '2024-05-22 12:10:55',
  },
};
