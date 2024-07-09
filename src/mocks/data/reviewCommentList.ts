export const mockReviewCommentList = {
  status: 200,
  message: '리뷰 댓글 조회 성공',
  data: {
    comments: [
      {
        commentId: 1,
        userId: 1,
        nickName: '주인',
        profileImageUrl: '/image/test_user.png',
        comment: '저도 여기 먹어봤는데 ...',
        createdAt: '2024-06-12 14:10:55',
      },
      {
        commentId: 2,
        userId: 2,
        nickName: '나도',
        profileImageUrl: '/image/test_user.png',
        comment: '저도 여기 먹어봤는데 맛있어요...',
        createdAt: '2024-06-13 14:10:55',
      },
      {
        commentId: 3,
        userId: 3,
        nickName: 'hah112',
        profileImageUrl: '/image/test_user.png',
        comment: '내일 가보려고 하는데 뭐가 맛있나요?',
        createdAt: '2024-07-01 14:10:55',
      },
    ],
  },
};
