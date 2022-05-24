import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import { axiosCallHandler } from "../../infra/axiosHelper";
import Home from "../../pages";
jest.unmock("axios");

const mockedBaseURL = "/contacts";
let mock: MockAdapter;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

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
  it("Should fail the request and execute the catch Statement", async () => {
    mock.onGet(`${mockedBaseURL}/111aa1231`).reply(404);

    return axiosCallHandler({ method: "get" })
      .then()
      .catch((error) => {
        expect(error).toThrowError(
          "There was an error while loading the contacts. Try again later."
        );
      });
  });
});
