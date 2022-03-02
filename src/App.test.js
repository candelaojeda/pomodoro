<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
=======
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
>>>>>>> 7c8c5d603716e5279468ded993dc0eddd07df220
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
