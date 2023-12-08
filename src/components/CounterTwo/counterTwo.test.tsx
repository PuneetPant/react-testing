import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { CounterTwo } from "./counterTwo";

describe("CountetTwo component", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByRole("heading", {
      name: /counter two/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    const user = userEvent.setup();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButtonElement = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementButtonElement);
    await user.click(decrementButtonElement);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
