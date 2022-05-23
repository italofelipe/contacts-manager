import { render } from "@testing-library/react";
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
});
