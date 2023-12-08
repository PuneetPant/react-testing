import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application component", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading1 = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading1).toBeInTheDocument();

    const pageHeading2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading2).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("a person with a laptop");
    expect(imgElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Puneet");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
