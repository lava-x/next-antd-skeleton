describe("Demo", () => {
  it("should see 'ES6 page with TypeScript Component' header", () => {
    cy.visit("/es6-with-ts-component");
    cy.getBySel("es6-with-ts-h1").should(
      "equal",
      "ES6 page with TypeScript Component"
    );
  });

  it("should not see 404", function () {
    cy.visit("/es6-with-ts-component");
    cy.location("pathname").should("equal", "/es6-with-ts-component");

    cy.visit("/es6-pure");
    cy.location("pathname").should("equal", "/es6-pure");
  });

  it("should redirect to 404", () => {
    cy.visit("/app/dashboard");
    cy.location("pathname").should("equal", "/404");

    cy.visit("/products");
    cy.location("pathname").should("equal", "/404");
  });
});
