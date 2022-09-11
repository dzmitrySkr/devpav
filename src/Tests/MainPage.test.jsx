import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MainPage from "../Components/MainPage";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: "Spread bet",
      }),
  })
);

describe("MainPage title component", () => {
  it("MainPage render", () => {
    render(<MainPage />);

    expect(screen.getByText("GROUP")).toBeInTheDocument();
  });

  it("MaiPage table render", () => {
    render(<MainPage />);
    expect(screen.queryByText(/Name/i)).toBeNull();
  });
});
