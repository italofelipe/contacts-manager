import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from ".";

describe("Test the index page", () => {
  it("Should render the index page", async () => {
    act(() => {
      render(<Home />);
    });
    expect(screen.findByText("Telephonist")).toBeTruthy();
  });
});
