import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArrowButton from '@/components/common/buttons/navigation/button-with-arrow/ButtonWithArrow';
import StandardButton from '@/components/common/buttons/functionality/standard-button/StandardButton';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ButtonWithArrow Component', () => {
  it('Renders button with correct button string', () => {
    render(<ArrowButton buttonString="Click here" buttonUrl=""></ArrowButton>);
    expect(
      screen.getByRole('button', { name: 'Click here' })
    ).toBeInTheDocument();
  });
});
