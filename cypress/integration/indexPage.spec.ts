describe("Navigation", () => {
  it("Should verify the h2 element", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h2").contains("Telephonist");
    cy.get("button").contains("Add contact");
  });
});

const asModule = {};
export default asModule;
