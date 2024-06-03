export type ReviewListResType = {
  status: string;
  message: string;
  hasNext: boolean;
  data: {
    reviews: ReviewItemType[];
  };
};

export type ReviewItemType = {
  reviewId: number;
  userId: number;
  nickName: string;
  profileImageUrl: string;
  content: string;
  reviewImageUrls: ReviewImageType[];
  rating: number;
  isLike: boolean;
  likeCount: number;
  commentCount: number;
  store: ReviewStoreType;
  createdAt: string;
};

export type ReviewImageType = {
  id: number;
  url: string;
};

export type ReviewStoreType = {
  id: number;
  name: string;
  address: string;
  isLike: boolean;
};
