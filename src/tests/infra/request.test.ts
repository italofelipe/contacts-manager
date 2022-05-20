import Request from "../../infra/request";

describe("Should test Request class", () => {
  it("Should test the return of the getRequestData method", () => {
    const request = new Request({
      error: false,
      loading: false,
      response: {
        email: "loremipsum@mail.com",
        phone: "513412",
        name: "Lorem Ipsum da Silva",
      },
    });
    const requestData = request.getRequestData();
    expect(request).toEqual(requestData);
  });
});
