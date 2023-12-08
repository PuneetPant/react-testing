import { render, screen } from "@testing-library/react";
// import { server } from '../../mocks/server'
import { Users } from "./Users";
// import { rest } from 'msw'
// import { server } from '../../mocks/server'

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  // test('renders a list of users', async () => {
  //   // beforeAll(() => server.listen())
  //   render(<Users />);
  //   const users = await screen.findAllByRole('listitem');
  //   expect(users).toHaveLength(3);
  // })
});
