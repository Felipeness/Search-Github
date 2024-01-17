import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders test message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
