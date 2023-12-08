import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet Component", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders with name", () => {
    render(<Greet name="Puneet" />);
    const textElement = screen.getByText("Hello Puneet");
    expect(textElement).toBeInTheDocument();
  });
});
