import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArrowButton from '@/components/common/buttons/navigation/button-with-arrow/ButtonWithArrow';
import ButtonWithArrow from '@/components/common/buttons/navigation/button-with-arrow/ButtonWithArrow';
import { link } from 'fs';

describe('ButtonWithArrow Component', () => {
  const buttonText = 'Click here';
  const buttonUrl = '/url';

  it('Renders button with correct button string and href', async () => {
    render(<ButtonWithArrow buttonString={buttonText} buttonUrl={buttonUrl} />);

    const linkElement = screen.getByRole('button', { name: buttonText });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', buttonUrl);
  });
});
