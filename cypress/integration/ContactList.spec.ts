import { cy, it } from "local-cypress";

describe("Navigation", () => {
  it("Should verify the Contacts text element", () => {
    cy.visit("http://localhost:3000/");
    cy.get("p").contains("Contacts");
  });

  it("Should verify wether theres a UL element", () => {
    cy.get("ul div").children()
  })
});
