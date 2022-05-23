import { cy, it } from "local-cypress";

describe("The creation of a contact screen", () => {
  it("Should click in the Add contact button", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Add contact").click();
  });
  it("Should find the text Add a new contact", () => {
    cy.get("p").contains("Add a new contact");
  });

  it("Should verify wether the button is disabled by default", () => {
    cy.get("button").should("be.disabled");
  });

  it("Should fill the form and the button must be enabled, and upon click, a modal must be shown", () => {

    cy.get("input[data-testid=field-name]").click().type("Thanos de Tita");
    cy.get("input[data-testid=field-email]")
      .click()
      .type("thanos@darkorder.net");
    cy.get("input[data-testid=field-phone]").click().type("987654567");

    cy.get("button[data-testid=create-button]").should("be.enabled");
    cy.get("button[data-testid=create-button]").click();
    
    cy.intercept("POST", "/contacts", (req) => {
      req.body = {
        email: "thanos@darkorder.net",
        phone: "987654567",
        name: "Thanos de Tita",
      };
    }).as("create");
    
    cy.get("div[data-testid=modal]").should("be.visible");
  });
});
