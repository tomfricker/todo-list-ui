import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pending tasks list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pending Tasks/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders completed tasks list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pending Tasks/i);
  expect(linkElement).toBeInTheDocument();
});
