'use client';

import React, { useEffect, useState } from 'react';
import { useCafeListInfiniteQuery } from '@/api/cafe/queries';
import Icon from '@/components/Icon/Icon';
import { useFilterStore } from '@/store/filterStore';
import { reviewStore } from '@/store/userStore';
import { CafeItemType } from '@/types/cafe';

export default function SearchForm() {
  const reviewStatus = reviewStore();
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState<CafeItemType[]>();
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const { activeTags, activeLocation } = useFilterStore();

  const { data } = useCafeListInfiniteQuery({
    tags: activeTags,
    location: activeLocation,
    pageSize: 20,
  });

  const updateResult = () => {
    const result = data?.pages[0].data.cafeInfos.filter((el) =>
      el.cafeName.includes(keyword)
    );
    setSearchResult(result);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateResult();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  const setCafeInfoHandler = (cafe: CafeItemType) => {
    reviewStatus.setResetPlaceState();
    reviewStatus.setCafeName(cafe.cafeName);
    reviewStatus.setCafeLoca(cafe.cafeLoca);
    reviewStatus.switchSearchLoca();
    reviewStatus.setModalState();
  };

  return (
    <>
      <div className="py-9">
        <div className="flex items-center justify-center gap-5 mb-5 px-5">
          <span
            onClick={() => reviewStatus.switchSearchLoca()}
            className="inline-block cursor-pointer">
            <Icon name="arrow_left" />
          </span>
          <input
            onChange={onChangeData}
            className="bg-zinc-200 w-[90%] px-3 py-1 focus:outline-none"
            placeholder="카페명을 입력하세요"
            type="text"
          />
        </div>
        <ul>
          {searchResult?.map((cafe) => (
            <>
              <div
                onClick={() => setCafeInfoHandler(cafe)}
                className="py-4 px-7 cursor-pointer hover:bg-primary hover:bg-opacity-30"
                key={cafe.cafeId}>
                <li className="font-bold">{cafe.cafeName}</li>
                <li className="text-text_light_grey text-xs">
                  {cafe.cafeLoca}
                </li>
              </div>
              <div className="border-[1px] border-bg_disabled" />
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
