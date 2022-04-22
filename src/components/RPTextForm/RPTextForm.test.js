import { render, screen } from '@testing-library/react';
import RPTextForm from './RPTextForm';

test('renders learn react link', () => {
  render(<RPTextForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
