describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h2").contains("Contact keeper");
  });
});

const asModule = {};
export default asModule;
