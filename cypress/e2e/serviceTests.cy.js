context("services navigation", () => {
    beforeEach(() => {
        cy.visit("https://eesti.ee");

        cy.get("button.ria-btn").contains("Ei nõustu").click();
    });

    it("should show subcategories for health and prescriptions", () => {
        cy.get("span").contains("menu").parent("button").click();

        cy.get("p.sidenav-submenu-text-general")
            .contains("Tervis ja retseptid")
            .parentsUntil("button")
            .last()
            .click();

        cy.get("p.sidenav-submenu-text-general").contains("Tervishoid ja arstiabi");

        cy.get("p.sidenav-submenu-text-general").contains("Töötervishoid");
    });

    it("should open prescriptions page and *terviseportaal* in new page", () => {
        cy.get("span").contains("menu").parent("button").click();

        cy.get("p.sidenav-submenu-text-general")
            .contains("Tervis ja retseptid")
            .parentsUntil("button")
            .last()
            .click();

        cy.get("p.sidenav-submenu-text-general")
            .contains("Tervishoid ja arstiabi")
            .parentsUntil("button")
            .last()
            .click();

        cy.get("p.sidenav-menu-text")
            .contains("Retseptid")
            .parentsUntil("a")
            .last()
            .click();

        cy.get("h1.shell-title").contains("Retseptid");

        cy.get("a.external").should("have.attr", "target", "_blank");
    });
});