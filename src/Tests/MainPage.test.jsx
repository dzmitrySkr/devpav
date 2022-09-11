import { render, screen } from "@testing-library/react";
import MainPage from "../Components/MainPage";

describe("MainPage compobent", () => {
  it("MainPage render", () => {
    render(<MainPage />);

    expect(screen.getByText("GROUP")).toBeInTheDocument();
  });
});
