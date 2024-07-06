import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button component', () => {
  it('디폴트 버튼 랜더링 테스트', () => {
    render(<Button text="Default Button" childrenType="textOnly" />);
    const buttonElement = screen.getByRole('button', {
      name: /default button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-16', 'px-32', 'py-14');
    expect(buttonElement).toHaveClass('bg-button_bg_default');
  });

  it('테마, 사이즈 변경 버튼 랜더링 테스트', () => {
    render(
      <Button
        variant="secondary"
        size="xl"
        childrenType="textOnly"
        text="Secondary XL Button"
      />
    );
    const buttonElement = screen.getByRole('button', {
      name: /secondary xl button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-20', 'px-32', 'py-20', 'gap-8');
    expect(buttonElement).toHaveClass(
      'bg-button_secondary_bg',
      'border',
      'border-button_secondary_stroke',
      'text-button_secondary_text'
    );
  });

  it('icon only 버튼 랜더링 테스트', () => {
    render(
      <Button
        variant="primary"
        size="s"
        childrenType="iconOnly"
        iconName="heart"
        aria-label="icon only button"
      />
    );
    const buttonElement = screen.getByRole('button', {
      name: /icon only button/i,
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('p-8');
    expect(buttonElement).toHaveClass('bg-button_icon_only_bg');
  });

  it('버튼 클릭 작동 테스트', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} text="Click Me" />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('클래스네임 추가 테스트', () => {
    render(<Button className="extra-class" text="Button with Class" />);
    const buttonElement = screen.getByRole('button', {
      name: /button with class/i,
    });
    expect(buttonElement).toHaveClass('extra-class');
  });
});
