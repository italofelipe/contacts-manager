import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../pages";

describe("Test the index page", () => {
  it("Should render the index page", async () => {
    act(() => {
      render(<Home />);
    });
    expect(screen.findByText("Telephonist")).toBeTruthy();
  });

  it("Should display a new text once the Button is clicked", () => {
    // const button = screen.getByRole("button");
    const { container, getByTestId } = render(<Home />);
    act(() => getByTestId("add-contact-button").click());
    expect(container.getElementsByTagName("section")).toBeInTheDocument;
  });
});
