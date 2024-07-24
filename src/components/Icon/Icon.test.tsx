import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Icon from '@/components/Icon/Icon';
import { FILTER_COLOR } from '@/styles/filterColor';

describe('Icon component', () => {
  it('디폴트 코멘트 아이콘 랜더링 테스트', () => {
    const { getByAltText } = render(<Icon name="comment" />);
    const imgElement = getByAltText('comment');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/icon/comment.svg');
    expect(imgElement).toHaveStyle({ width: '24px', height: '24px' });
    expect(imgElement).not.toHaveStyle({ filter: expect.any(String) });
  });

  it('하트 아이콘 랜더링 테스트', () => {
    const { getByAltText } = render(<Icon name="heart" />);
    const imgElement = getByAltText('heart');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/icon/heart.svg');
  });

  it('사이즈, 필터링 포함 코멘트 아이콘 랜더링 테스트', () => {
    const { getByAltText } = render(
      <Icon name="comment" size={32} filter="GRAY" />
    );
    const imgElement = getByAltText('comment');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/icon/comment.svg');
    expect(imgElement).toHaveStyle({ width: '32px', height: '32px' });
    expect(imgElement).toHaveStyle({ filter: FILTER_COLOR.GRAY });
  });

  it('className 추가 테스트', () => {
    const { getByAltText } = render(
      <Icon name="comment" className="test-class" />
    );
    const imgElement = getByAltText('comment');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveClass('test-class');
  });
});
