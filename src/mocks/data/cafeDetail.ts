export const mockCafeDetail = {
  status: 200,
  message: '카페정보 상세 조회 성공',
  data: {
    cafeInfo: {
      cafeId: 1,
      cafeName: '미뉴트빠삐용',
      cafeLoca: '서울 강남구 도산대로 51길 37 지하 1층',
      cafeLocax: 127.038236626868,
      cafeLocay: 37.52418466271341,
      cafeTime: '월,화,수,목,일 09:00 ~ 21:00',
      cafePhone: '070-8888-0288',
      cafeUrl: 'https://www.instagram.com/minute.papillon.official/?hl=ko',
      cafePR:
        '#도산공원 #압구정로데오카페 #압구정카페 #청담카페 #츄러스 #빈티지분위기 #카카오페이',
      cafeComment: '외국인들도 줄 서서 먹는다는 츄러스 ...',
      cafeImages: [
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
        {
          id: 4,
          url: '/image/test_review_1.png',
        },
        {
          id: 5,
          url: '/image/test_review_2.png',
        },
        {
          id: 6,
          url: '/image/test_review_3.png',
        },
      ],
      cafeRating: 4.2,
      reviewCount: 12,
      isLike: false,
    },
  },
};
