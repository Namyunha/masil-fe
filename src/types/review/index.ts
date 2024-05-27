export type ReviewListResType = {
  status: string;
  message: string;
  data: {
    reviews: [
      {
        reviewId: number;
        userId: number;
        nickName: string;
        profileImageUrl: string;
        content: string;
        reviewImageUrls: [
          {
            id: number;
            url: string;
          },
        ];
        rating: number;
        isLike: boolean;
        likeCount: number;
        commentCount: number;
        store: {
          id: number;
          name: string;
          address: string;
          isLike: boolean;
        };
        createdAt: string;
      },
    ];
  };
};
