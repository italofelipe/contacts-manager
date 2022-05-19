import { cy, it } from "local-cypress";

describe("Index page navigation", () => {
  it("Should verify the h2 element", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h2").contains("Telephonist");
  });

  it("Should verify wether the button to add contacts exists", () => {
    cy.get("button").contains("Add contact");
  });
});
