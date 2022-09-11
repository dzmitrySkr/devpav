import { render, screen } from "@testing-library/react";
import Accounts from "../Components/Accounts";

let user = {
  name: "Dima",
};

describe("Loading Page", () => {
  it("Has value", () => {
    render(<Accounts user={user} />);

    expect(screen.getByText("Dima")).toBeInTheDocument();
  });
});
