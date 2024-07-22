export type DefaultResType = {
  status: number;
  message: string;
};

export type InfinityScrollMetaType = {
  hasNext: boolean;
  pageable_count: number;
  same_name: {
    keyword: string;
    region: string[];
    selected_region: string;
  };
  total_count: number;
};
