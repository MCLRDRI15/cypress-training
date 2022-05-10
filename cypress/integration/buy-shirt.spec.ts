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
    // Arrange
    menuContentPage.visitMenuContentPage();
    const user = "aperdomobo@gmail.com";
    const password = "WorkshopProtractor";
    const completeOrderMessage = "Your order on My Store is complete.";

    // Act
    menuContentPage.goToTShirtMenu();
    productListPage.proceedToCheckout();
    shoppingCartPage.summaryCheckout();
    loginPage.login(user, password);
    loginPage.loginValidate();
    addressStepPage.checkout();
    shippingStepPage.acceptTerms();
    shippingStepPage.checkout();
    paymentStepPage.paymentModeSelect();
    paymentStepPage.confirmOrder();

    // Assert
    paymentStepPage.completeAllTheProcess()
        .should(
            "have.text",
            completeOrderMessage);
  });
});
