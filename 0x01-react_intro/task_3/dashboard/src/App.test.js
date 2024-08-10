import { render, screen } from '@testing-library/react';
import {act} from 'react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Login to access the full dashboard');
  expect(linkElement).toBeInTheDocument();
});
