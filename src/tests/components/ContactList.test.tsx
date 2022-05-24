import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import ContactList from "../../components/ContactList";
import { contactsMock } from "../../__mocks__/contactsMock";

jest.unmock("axios");

let mock: MockAdapter;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

describe("Test the index page", () => {
  const users: Contact[] = [
    {
      email: "johndoe@email.com",
      name: "John Doe",
      phone: "1234",
    },
    {
      email: "janedoe@email.com",
      name: "Jane Doe",
      phone: "4567",
    },
  ];
  it("Should render the index page", async () => {
    act(() => {
      render(
        <ContactList
          disabled={false}
          contacts={contactsMock}
          onSelect={jest.fn()}
        />
      );
    });
    expect(screen.findByText("Contacts")).toBeTruthy();
  });

  it("Should request for contacts once the page is fully loaded", async () => {
    const wrapper = render(
      <ContactList contacts={users} disabled={false} onSelect={jest.fn()} />
    );
    expect(wrapper.getAllByTestId("contact-card")).toBeInTheDocument;
  });
});
