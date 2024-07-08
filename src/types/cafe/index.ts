import { DefaultResType } from '..';
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
