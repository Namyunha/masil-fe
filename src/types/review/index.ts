export type ReviewListReqType = {
  tags: string[];
  pagingData: {
    lastPostId?: number;
    pageSize?: number;
  };
};

export type ReviewListResType = {
  status: string;
  message: string;
  data: {
    reviews: ReviewItemType[];
    hasNext: boolean;
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
  cafeInfo: CafeInfoType;
  createdAt: string;
};

export type ReviewImageType = {
  id: number;
  url: string;
};

export type CafeInfoType = {
  cafeId: number;
  cafeName: string;
  cafeLoca: string;
  isLike: boolean;
};
