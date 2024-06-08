import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hurray Finally Automated the project using Jenkins CI/CD Pipeline link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hurray Finally Automated the project using Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
