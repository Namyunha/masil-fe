import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { TAB_LIST } from '@/constants/home';
import HomeTab from './HomeTab';

describe('HomeTab component', () => {
  it('탭 버튼 랜더링 테스트', () => {
    render(<HomeTab />);

    TAB_LIST.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument();
    });
  });

  it('default 활성화 버튼 확인 테스트', () => {
    render(<HomeTab />);

    const activeTabButton = screen.getByText('추천');
    const inactiveTabButton = screen.getByText('카페');
    const secondInactiveTabButton = screen.getByText('스크랩');

    expect(activeTabButton).toHaveClass('text-text_black');
    expect(inactiveTabButton).toHaveClass('text-text_disabled');
    expect(secondInactiveTabButton).toHaveClass('text-text_disabled');
  });

  it('버튼 클릭시 활성화 버튼 변경 테스트', () => {
    render(<HomeTab />);

    const activeTabButton = screen.getByText('추천');
    const inactiveTabButton = screen.getByText('카페');
    const secondInactiveTabButton = screen.getByText('스크랩');

    fireEvent.click(inactiveTabButton);

    expect(activeTabButton).toHaveClass('text-text_disabled');
    expect(inactiveTabButton).toHaveClass('text-text_black');
    expect(secondInactiveTabButton).toHaveClass('text-text_disabled');
  });
});
