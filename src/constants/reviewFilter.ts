export const SORTING = {
  NEWEST: '최신 순',
  POPULAR: '좋아요 순',
  HIGH_RATING: '평점 순',
} as const;

export const TAGS = {
  NOFILTER: '태그 없음',
  COFFEE: '커피 맛집',
  BEVERAGE: '음료 맛집',
  DESSERT: '디저트 맛집',
  MANNER: '친절',
  MONEY: '가성비',
  COZY: '분위기 있는',
  QUIET: '집중 최고',
  ACCESSIBILITY: '교통 편리',
} as const;

export const LOCATION = {
  ALL: '서울 전체',
  GANGNAM_SEOCHO: '강남/서초',
  JAMSIL_SONGPA_GANGDONG: '잠실/송파/강동',
  YEONGDEUNGPO_YEOUIDO_GANGSEO: '영등포/여의도/강서',
  GEONDAE_SEONGSU_WANGSHIMNI: '건대/성수/왕십리',
  JONGNO_JUNGU: '종로/중구',
  HONGDAE_HAPJEONG_MAPO: '홍대/합정/마포',
  YONGSAN_ITAEWON_HANNAM: '용산/이태원/한남',
  SEONGBUK_NOWON_JUNGNANG: '성북/노원/중랑',
  GURO_GWANAK_DONGJAK: '구로/관악/동작',
} as const;

export const DEFAULT_SORTING = 'NEWEST';
export const DEFAULT_TAG = 'NOFILTER';
export const DEFAULT_LOCATION = 'ALL';

export const MAX_FILTER_COUNT = 3;
export const NO_FILTER_COUNT = 0;
