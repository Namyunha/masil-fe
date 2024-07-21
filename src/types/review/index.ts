import { LOCATION, SORTING, TAGS } from '@/constants/reviewFilter';
import { DefaultResType, InfinityScrollMetaType } from '..';

export type ReviewListReqType = {
  tags: TagsKey[];
  sorting: SortingKey;
  location: LocationKey;
  pagingData: {
    lastPostId?: number;
    pageSize?: number;
  };
};

export type ReviewListResType = DefaultResType & {
  data: {
    reviews: ReviewItemType[];
    meta: InfinityScrollMetaType;
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

export type SortingKey = keyof typeof SORTING;
export type TagsKey = keyof typeof TAGS;
export type LocationKey = keyof typeof LOCATION;

export type ReviewLikeReqType = {
  reviewId: number;
  isLike: boolean;
};

export type ReviewLikeResType = DefaultResType & {
  data: {
    isLike: boolean;
  };
};

export type ReviewDetailResType = DefaultResType & {
  data: ReviewDetailType;
};

export type ReviewDetailType = ReviewItemType & {
  tags: TagsKey[];
};

export type ReviewCommentReqType = {
  reviewId: string;
};

export type ReviewCommentResType = DefaultResType & {
  data: {
    comments: ReviewCommentType[];
  };
};

export type ReviewCommentType = {
  commentId: number;
  userId: number;
  nickName: string;
  profileImageUrl: string;
  comment: string;
  createdAt: string;
};
