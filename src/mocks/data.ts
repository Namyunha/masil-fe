export const mockReviewList = {
  status: 200,
  message: '전체 리뷰 리스트 조회 성공',
  data: {
    reviews: [
      {
        reviewId: 1,
        userId: 2,
        nickName: '베리',
        profileImageUrl:
          'https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw',
        content: '외국인들도 줄 서서 먹는다는 츄러스 ...',
        reviewImageUrls: [
          {
            id: 1,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgiWPmUeUyQ4sSF-ZZk-01Z5r9t67b_dfg0QTSxb0hQ&s',
          },
          {
            id: 2,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jM23BxpYVmUrl6livpZN2LMANe3kKhPLw8g1vGn8eA&s',
          },
        ],
        rating: 4.2,
        isLike: false,
        likeCount: 12,
        commentCount: 12,
        store: {
          id: 1,
          name: '미뉴트빠삐용',
          address: '서울 강남구 도산대로 51길 37 지하 1층',
          isLike: false,
        },
        createdAt: '2024-05-22 12:10:55',
      },
    ],
  },
};
