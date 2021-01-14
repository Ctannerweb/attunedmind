import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Attuned Mind', () => {
  render(<App />);
  const headingElement = screen.getByText(/Attuned Mind/i);
  expect(headingElement).toBeInTheDocument();
});
