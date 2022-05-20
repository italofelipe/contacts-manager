import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CreateContact from "../../components/CreateContact";

describe("Test CreateContact component", () => {
  
  it("Should render CreateContact component", async () => {
    act(() => {
      render(<CreateContact onClose={() => jest.fn} />);
    });
    expect(screen.findByText("Add a new contact")).toBeTruthy();
  });

  it("Should enable the button once all fields are filled", () => {
    render(<CreateContact onClose={() => jest.fn} />);
    const nameInput = screen.getByTestId("field-name");
    const emailInput = screen.getByTestId("field-email");
    const phoneInput = screen.getByTestId("field-phone");
    const createButton = screen.getByTestId("create-button");
    fireEvent.change(nameInput, { target: { value: "Thanos" } });
    fireEvent.change(emailInput, { target: { value: "thanos@darkorder.unv" } });
    fireEvent.change(phoneInput, { target: { value: "5512135" } });
    fireEvent.click(createButton)
    expect(createButton).toBeEnabled;
    
  });
});
