import { render, screen } from "@testing-library/react";
import TitleForAccounts from "../Components/TitleForAccounts";

describe("MainPage title component", () => {
  it("MainPage render", () => {
    render(<TitleForAccounts />);

    expect(screen.getByText("Name")).toBeInTheDocument();
  });

 
});
