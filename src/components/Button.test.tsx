import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from '@/components/Button';

describe('Button component', () => {
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'bg-brown text-white rounded text-base py-2 px-6'
    );
    expect(button).toHaveAttribute('type', 'button');
  });

  test('renders with primary variant, shape, and size', () => {
    render(
      <Button variant="primary" shape="primary" size="medium">
        Click me
      </Button>
    );
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'bg-brown text-white rounded text-base py-2 px-6'
    );
  });

  test('renders with cancel variant', () => {
    render(<Button variant="cancel">Cancel</Button>);
    const button = screen.getByRole('button', { name: /cancel/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-red text-white');
  });

  test('renders with more variant', () => {
    render(<Button variant="more">More</Button>);
    const button = screen.getByRole('button', { name: /more/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-transparent text-black');
  });

  test('renders with square shape', () => {
    render(<Button shape="square">Square</Button>);
    const button = screen.getByRole('button', { name: /square/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('rounded-none');
  });

  test('renders with full shape', () => {
    render(<Button shape="full">Full</Button>);
    const button = screen.getByRole('button', { name: /full/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('rounded-full');
  });

  test('renders with small size', () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByRole('button', { name: /small/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-sm py-1 px-2');
  });

  test('renders with large size', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByRole('button', { name: /large/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-lg py-3 px-6');
  });

  test('handles onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('supports custom class names', () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toHaveClass('custom-class');
  });
});
