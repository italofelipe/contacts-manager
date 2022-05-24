import { fireEvent, render, screen } from "@testing-library/react";
import SelectedContact from "../../components/SelectedContact";
import { contactsMock } from "../../__mocks__/contactsMock";
describe("Tests for SelectedContact test", () => {
  it("Should render SelectedContact component without errors", () => {
    const wrapper = render(
      <SelectedContact
        onClose={() => jest.fn}
        onCreate={() => jest.fn}
        onDelete={() => jest.fn}
        selectedContact={contactsMock[0]}
      />
    );

    expect(wrapper).toBeTruthy();
  });

  it("Should display the name of the selected contact", async () => {
    const wrapper = render(
      <SelectedContact
        onClose={() => jest.fn}
        onCreate={() => jest.fn}
        onDelete={() => jest.fn}
        selectedContact={contactsMock[0]}
      />
    );

    expect(await wrapper.findAllByTestId("selected-contact-card"))
      .toBeInTheDocument;
  });

  it("Should trigger a click in the update button", async () => {
    const wrapper = render(
      <SelectedContact
        onClose={() => jest.fn}
        onCreate={() => jest.fn}
        onDelete={() => jest.fn}
        selectedContact={contactsMock[0]}
      />
    );

    const updateButton = screen.getByTestId("selected-update-contact");
    const deleteButton = screen.getByTestId("selected-update-contact");

    expect(await wrapper.findAllByTestId("selected-contact-card"))
      .toBeInTheDocument;

    fireEvent.click(updateButton);
    fireEvent.click(deleteButton);
  });
});
