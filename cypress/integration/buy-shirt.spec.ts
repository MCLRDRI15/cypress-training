import {MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();
    const user = "aperdomobo@gmail.com";
    const password = "WorkshopProtractor";
    const completeOrderMessage = "Your order on My Store is complete.";

    // Act
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart("Faded Short Sleeve T-shirts");
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
