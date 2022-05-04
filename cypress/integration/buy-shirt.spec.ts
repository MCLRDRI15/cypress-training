import {MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // cy.visit("http://automationpractice.com/");
    // cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
    // cy.get("#layer_cart").should("be.visible");
    // cy.get(".clearfix div.button-container > a").click();
    productListPage.proceedToCheckout();

    // cy.get(".cart_navigation span").click();
    shoppingCartPage.summaryCheckout();

    // cy.get("#email").type("aperdomobo@gmail.com");
    // cy.get("#passwd").type("WorkshopProtractor");
    // cy.get("div.form_content button span i.icon-lock").click();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    loginPage.loginValidate();

    // cy.get("#ordermsg").type("Cypress purchase process validation ");
    // cy.get("div.checker input").click();
    // cy.get("p.cart_navigation button").click();
    addressStepPage.checkout();

    // cy.get("div.checker input").click();
    // cy.get("p.cart_navigation button[name='processCarrier']").click();
    shippingStepPage.acceptTerms();
    shippingStepPage.checkout();

    // cy.get("p.payment_module a.bankwire").click();
    // cy.get("p#cart_navigation button span").click();
    // cy.get("#center_column > div > p > strong").should(
    //     "have.text",
    //     "Your order on My Store is complete.",
    // );
    paymentStepPage.paymentModeSelect();
    paymentStepPage.confirmOrder();
    paymentStepPage.completeAllTheProcess()
        .should(
            "have.text",
            "Your order on My Store is complete.");
  });
});
