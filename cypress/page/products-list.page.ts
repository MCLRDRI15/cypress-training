/* eslint-disable require-jsdoc */
class ProductListPage {
  private CartSelect: string;
  private ModalView: string;
  private CheckoutButton: string;

  constructor() {
    this.CartSelect = ".ajax_add_to_cart_button > span";
    this.ModalView = "#layer_cart";
    this.CheckoutButton = "a[title='Proceed to checkout']";
  }

  public proceedToCheckout(): void {
    cy.get(this.CartSelect).click();
    cy.get(this.ModalView).should("be.visible");
    cy.get(this.CheckoutButton).click();
  }
}

export {ProductListPage};
