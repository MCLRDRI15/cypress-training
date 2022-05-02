/* eslint-disable require-jsdoc */
class ProductListPage {
  private CartSelect: string;
  private ModalView: string;
  private CheckoutButton: string;

  constructor() {
    this.CartSelect = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.ModalView = "#layer_cart";
    this.CheckoutButton = ".clearfix div.button-container > a";
  }

  public productSelect(): void {
    cy.get(this.CartSelect).click();
  }

  public modalViewForProductsInfo(): void {
    cy.get(this.ModalView).should("be.visible");
  }

  public checkoutSelectedClothes(): void {
    cy.get(this.CheckoutButton).click();
  }
}

export {ProductListPage};
