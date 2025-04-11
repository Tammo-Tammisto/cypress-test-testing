context("contact us page functionality and elements", () => {
    beforeEach(() => {
        cy.visit("https://eesti.ee");

        cy.get("button.ria-btn").contains("Ei nõustu").click();

        cy.get("p.sidenav-menu-text")
            .contains("Võtke meiega ühendust")
            .parentsUntil("a")
            .last()
            .click({ force: true });
    });

    it("should have all important fields defined", () => {
        cy.get("label")
            .contains("Ees- ja perekonnanimi")
            .parent()
            .find("div > input");

        cy.get("label").contains("E-posti aadress").parent().find("div > input");

        cy.get("label")
            .contains("Kirjeldage olukorda või küsimust, millega vajate abi")
            .parent()
            .find("textarea");
    });

    it("should give an error when invalid email address is provided", () => {
        cy.get("label")
            .contains("E-posti aadress")
            .parent()
            .find("div > input")
            .type("anInvalidAddress");

        cy.get("button.ria-btn").contains("Saada kiri").click();

        cy.get("label")
            .contains("E-posti aadress")
            .parent()
            .find("div > input")
            .should("have.class", "highlight-invalid");
    });
});