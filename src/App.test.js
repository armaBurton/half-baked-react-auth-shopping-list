import { render, screen } from '@testing-library/react';
import AuthPage from './AuthPage';

test('The shopping list app For a busy world', () => {
  render(<AuthPage />);
  const linkElement = screen.getByText(/list app For/i);
  expect(linkElement).toBeInTheDocument();
});
