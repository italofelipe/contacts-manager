import Firebase from "../../infra/firebase";

describe("Test the firebase class", () => {
  const firebaseMock = new Firebase({
    apiKey: "apiKey",
    authDomain: "authDomain",
    appId: "appId",
    databaseURL: "databaseURL1234",
    measurementId: "measurementId",
    messagingSenderId: "messagingSenderId",
    projectId: "projectId",
    storageBucket: "storageBucket",
  });
  it("Should create an instance of the firebase object", () => {
    expect(firebaseMock).toEqual({
      apiKey: "apiKey",
      authDomain: "authDomain",
      appId: "appId",
      databaseURL: "databaseURL1234",
      measurementId: "measurementId",
      messagingSenderId: "messagingSenderId",
      projectId: "projectId",
      storageBucket: "storageBucket",
    });
  });
  it("Should test the endpointURL", () => {
    expect(firebaseMock.endpointURL).toEqual("databaseURL1234");
  });
});
