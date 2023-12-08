import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import { Counter } from "./counter";
describe("Counter component", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders with 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders 1 after increment button click", async () => {
    user.setup();
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("1");
  });

  test("renders 2 after increment button is clicked twice", async () => {
    user.setup();
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("2");
  });

  test("renders 10 on heading", async () => {
    user.setup();
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    const inputElement = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", {
      name: /set/i,
    });
    await user.type(inputElement, "10");
    await user.click(setButtonElement);
    expect(countElement).toHaveTextContent("10");
  });

  test("shifts focus on tab click", async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    const incrementButtonElement = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.tab();
    expect(incrementButtonElement).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
  });
});
