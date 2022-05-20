import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { axiosCallHandler } from "../../infra/axiosHelper";

const mockedBaseURL = "/users.json";

let mock: MockAdapter;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

describe("Tests for the axios handler", () => {
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

  const singleContact: IRequestData = {
    response: {
      email: users[0].email,
      name: users[0].name,
      phone: users[0].phone,
    },
    error: false,
    loading: false,
  };

  it("Should test axios for GET requests", async () => {
    mock.onGet(`${mockedBaseURL}`).reply(200, users[0]);

    return axiosCallHandler({ method: "get" }).then((res) => {
      expect(res).toEqual(singleContact);
    });
  });

  it("Should throw an error for GET Requests", () => {
    mock.onGet(`${mockedBaseURL}`).reply(404, null);

    return axiosCallHandler({ method: "get" }).then((res) => {
      expect(res).toEqual({ error: true, loading: false, response: null });
    });
  });
  it("Should test axios for POST requests", () => {
    mock.onPost(`${mockedBaseURL}`).reply(200, users[0]);

    return axiosCallHandler({ method: "post", data: users[0] }).then((res) => {
      expect(res).toEqual({
        response: {
          email: "johndoe@email.com",
          name: "John Doe",
          phone: "1234",
        },
        error: false,
        loading: false,
      });
    });
  });

  it("Should throw an error for POSTS Requests ", () => {
    mock.onPost(`${mockedBaseURL}`).reply(404, null);

    return axiosCallHandler({ method: "post" }).then((res) => {
      expect(res).toEqual({ error: true, loading: false, response: null });
    });
  });
  it("Should test axios for PUT requests", () => {});
  it("Should throw an error for PUT Requests ", () => {
    mock.onPut(`${mockedBaseURL}`).reply(404, null);

    return axiosCallHandler({ method: "put" }).then((res) => {
      expect(res).toEqual({ error: true, loading: false, response: null });
    });
  });

  it("Should test axios for DELETE requests", () => {
    mock
      .onDelete(`${mockedBaseURL}`)
      .reply(200, { error: false, loading: false, response: null });

    return axiosCallHandler({ method: "delete" }).then((res) => {
      expect(res).toEqual({
        error: true,
        loading: false,
        response: null,
      });
    });
  });

  it("Should throw an error for DELETE Requests ", () => {
    mock.onDelete(`${mockedBaseURL}`).reply(404, null);

    return axiosCallHandler({ method: "delete" }).then((res) => {
      expect(res).toEqual({ error: true, loading: false, response: null });
    });
  });
});
