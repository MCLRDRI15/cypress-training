/* eslint-disable require-jsdoc */
class ProductListPage {
  private CartSelect: string;
  private ModalView: string;
  private CheckoutButton: string;
  private ProductListNamesCheck: string;

  constructor() {
    this.CartSelect = ".ajax_add_to_cart_button > span";
    this.ModalView = "#layer_cart";
    this.CheckoutButton = "a[title='Proceed to checkout']";
    this.ProductListNamesCheck = ".product-container";
  }

  private findProductByName(name: string): any {
    return cy.get(this.ProductListNamesCheck).filter(`:contains("${name}")`);
  }

  public addTShirtToCart(name: string): void {
    // cy.get(this.CartSelect).click();
    this.findProductByName(name).find(this.CartSelect).click();
    cy.get(this.ModalView).should("be.visible");
    cy.get(this.CheckoutButton).click();
  }
}

export {ProductListPage};
