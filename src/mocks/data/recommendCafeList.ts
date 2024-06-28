export const mockRecommendCafeList = {
  status: 200,
  message: '추천 카페 리스트 조회 성공',
  data: {
    cafes: [
      {
        cafeId: 1,
        cafeName: '미뉴트빠삐용',
        cafeLoca: 'GANGNAM_SEOCHO',
        tag: 'DESSERT',
        rating: 4.2,
        cafeImageUrl: '/image/test_review_1.png',
      },
      {
        cafeId: 2,
        cafeName: '스타벅스',
        cafeLoca: 'JONGNO_JUNGU',
        tag: 'BEVERAGE',
        rating: 4.7,
        cafeImageUrl: '/image/test_review_2.png',
      },
      {
        cafeId: 3,
        cafeName: 'corrci',
        cafeLoca: 'SEONGBUK_NOWON_JUNGNANG',
        tag: 'COZY',
        rating: 4.9,
        cafeImageUrl: '/image/test_review_3.png',
      },
    ],
  },
};
