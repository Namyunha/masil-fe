import { LocationKey, TagsKey } from '../review';

export type CafeRecommendResType = {
  status: number;
  message: string;
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
