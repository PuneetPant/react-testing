// import {render, screen} from ""

import { render, screen } from "../../test-utils";
import { MuiMode } from "./muiMode";

describe("MuiMode component", () => {
  test("renders correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading", {
      name: /dark mode/i,
    });
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
