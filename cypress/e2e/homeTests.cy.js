context("homepage loading and elements", () => {
  beforeEach(() => {
      cy.visit("https://eesti.ee");

      cy.get("button.ria-btn").contains("Ei nõustu").click();
  });

  it("should show search bar and allow input", () => {
      cy.get("input[placeholder='Sisestage otsingusõna']")
          .type("This is a test")
          .should("have.value", "This is a test");
  });

  it("should show menu items and they should be clickable", () => {
      cy.get("span").contains("menu").parent("button").click();

      cy.get("button.rep-select-button")
          .should("be.visible")
          .should("be.enabled");

      cy.get("p.sidenav-first-level-title-small").should("be.visible");

      cy.get("button.sidenav-button-height")
          .should("be.visible")
          .should("be.enabled");
  });
});