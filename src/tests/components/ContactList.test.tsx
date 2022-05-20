import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ContactList from "../../components/ContactList";
import { contactsMock } from "../../__mocks__/contactsMock";

describe("Test the index page", () => {
  it("Should render the index page", async () => {
    act(() => {
      render(<ContactList disabled={false} contacts={contactsMock} onSelect={jest.fn()} />);
    });
    expect(screen.findByText("Contacts")).toBeTruthy();
  });

});
