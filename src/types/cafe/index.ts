import { DefaultResType, InfinityScrollMetaType } from '..';
import { LocationKey, TagsKey } from '../review';

export type CafeRecommendResType = DefaultResType & {
  data: {
    cafes: RecommendedCafeType[];
  };
};

export type RecommendedCafeType = {
  cafeId: number;
  cafeName: string;
  cafeLoca: LocationKey;
  tag: TagsKey;
  rating: number;
  cafeImageUrl: string;
};

export type CafeDetailResType = DefaultResType & {
  data: {
    cafeInfo: CafeDetailType;
  };
};

export type CafeDetailType = {
  cafeId: number;
  cafeName: string;
  cafeLoca: string;
  cafeLocax: number;
  cafeLocay: number;
  cafeTime: string;
  cafePhone: string;
  cafeUrl: string;
  cafePR: string;
  cafeComment: string;
  cafeImages: CafeImageType[];
  cafeRating: number;
  reviewCount: number;
  isLike: boolean;
};

export type CafeImageType = {
  id: number;
  url: string;
};

export type CafeLikeReqType = {
  cafeId: number;
  isLike: boolean;
};

export type CafeLikeResType = DefaultResType & {
  data: {
    isLike: boolean;
  };
};

export type CafeListReqType = {
  tags: TagsKey[];
  location: LocationKey;
  pagingData: {
    lastPostId?: number;
    pageSize?: number;
  };
};

export type CafeListResType = DefaultResType & {
  data: {
    cafeInfos: CafeItemType[];
    meta: InfinityScrollMetaType;
  };
};

export type CafeItemType = {
  cafeId: number;
  cafeName: string;
  cafeLoca: string;
  rating: number;
  reviewCount: number;
  cafeImageUrls: {
    id: number;
    url: string;
  }[];
  tags: TagsKey[];
};
