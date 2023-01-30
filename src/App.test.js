import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Copyright ©2023 Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});
