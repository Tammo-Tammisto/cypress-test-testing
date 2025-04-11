context("search bar functionality", () => {
  beforeEach(() => {
      cy.visit("https://eesti.ee");

      cy.get("button.ria-btn").contains("Ei nõustu").click();
  });

  it("should search for the estonian anthem and navigate to relevant info page", () => {
      cy.get("input[placeholder='Sisestage otsingusõna']")
          .should("be.visible")
          .should("be.enabled")
          .type("Eesti hümn{enter}");

      cy.get("h3.articles-section__article-title > mark").contains("Eesti hümn");

      cy.get("h3.articles-section__article-title > mark")
          .contains("Eesti hümn")
          .parent()
          .parent()
          .find("div > button")
          .click();

      cy.get("h1.shell-title").contains("Eesti hümn");
  });

  it("should reuturn 0 results for empty search", () => {
      cy.get("input[placeholder='Sisestage otsingusõna']")
          .should("be.visible")
          .should("be.enabled")
          .type(" {enter}");

      cy.get("div.no-results-title").should("be.visible");
  });
});