// import {MenuContentPage} from "../page/index";
// const menuContentPage = new MenuContentPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // menuContentPage.visitMenuContentPage();
    // menuContentPage.goToTShirtMenu();
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
    cy.get("#layer_cart").should("be.visible");
    cy.get(".clearfix div.button-container > a").click();
    cy.get(".cart_navigation span").click();
    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("div.form_content button span i.icon-lock").click();
    cy.get("#ordermsg").type("Cypress purchase process validation ");
    cy.get("p.cart_navigation button[name='processAddress']").click();
    cy.get("div.checker input").click();
    cy.get("p.cart_navigation button[name='processCarrier']").click();
    cy.get("p.payment_module a.bankwire").click();
    cy.get("p.cart_navigation button").click();
    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
