import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pending tasks list', () => {
  render(<App apiUrl={'https://localhost:7190/ToDo'} />);
  const linkElement = screen.getByText(/Pending Tasks/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders completed tasks list', () => {
  render(<App apiUrl={'https://localhost:7190/ToDo'} />);
  const linkElement = screen.getByText(/Pending Tasks/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders add task input', () => {
  render(<App apiUrl={'https://localhost:7190/ToDo'} />);
  const linkElement = screen.getByText(/Add Task/i);
  expect(linkElement).toBeInTheDocument();
});
