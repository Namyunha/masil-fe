import { LOCATION, SORTING, TAGS } from '@/constants/reviewFilter';

export type ReviewListReqType = {
  tags: MoodType[];
  sorting: SortingType;
  location: LocationType;
  pagingData: {
    lastPostId?: number;
    pageSize?: number;
  };
};

export type MoodType =
  | 'NOFILTER' // 태그 없음
  | 'COFFEE' // 커피 맛집
  | 'BEVERAGE' // 음료 맛집
  | 'DESSERT' // 디저트 맛집
  | 'MANNER' // 친절
  | 'MONEY' // 가성비
  | 'COZY' // 분위기 있는
  | 'QUIET' // 집중 최고
  | 'ACCESSIBILITY'; // 교통 편리

export type SortingType =
  | 'NEWEST' // 최신 순
  | 'POPULAR' // 좋아요 순
  | 'HIGH_RATING'; // 평점 순

export type LocationType =
  | 'ALL' // "서울 전체",
  | 'GANGNAM_SEOCHO' // "강남/서초",
  | 'JAMSIL_SONGPA_GANGDONG' // "잠실/송파/강동",
  | 'YEONGDEUNGPO_YEOUIDO_GANGSEO' // "영등포/여의도/강서",
  | 'GEONDAE_SEONGSU_WANGSHIMNI' // "건대/성수/왕십리",
  | 'JONGNO_JUNGU' // "종로/중구",
  | 'HONGDAE_HAPJEONG_MAPO' // "홍대/합정/마포",
  | 'YONGSAN_ITAEWON_HANNAM' // "용산/이태원/한남",
  | 'SEONGBUK_NOWON_JUNGNANG' // "성북/노원/중랑",
  | 'GURO_GWANAK_DONGJAK'; // "구로/관악/동작";

export type ReviewListResType = {
  status: string;
  message: string;
  data: {
    reviews: ReviewItemType[];
    meta: ReviewListMetaType;
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

export type ReviewListMetaType = {
  hasNext: boolean;
  pageable_count: number;
  same_name: {
    keyword: string;
    region: string[];
    selected_region: string;
  };
  total_count: number;
};

export type SortingKey = keyof typeof SORTING;
export type TagsKey = keyof typeof TAGS;
export type LocationKey = keyof typeof LOCATION;
