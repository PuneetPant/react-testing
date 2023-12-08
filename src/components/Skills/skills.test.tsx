import { render, screen } from "@testing-library/react";
import React from "react";
import { Skills } from "./skills";

describe("Skills Component", () => {
  let skillsArr = ["HTML", "CSS", "JS", "React", "TypeScript"];
  test("renders correctly", () => {
    render(<Skills skills={skillsArr} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skillsArr} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skillsArr.length);
  });

  test("renders log in button", () => {
    render(<Skills skills={skillsArr} />);
    const loginButtonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButtonElement).toBeInTheDocument();
  });

  test("does not render start learning button", () => {
    render(<Skills skills={skillsArr} />);
    const startLearningButtonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButtonElement).not.toBeInTheDocument();
  });

  test("start learning button is eventually displayed", async () => {
    render(<Skills skills={skillsArr} />);
    const startLearningButtonElement = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      },
    );
    expect(startLearningButtonElement).toBeInTheDocument();
  });
});
