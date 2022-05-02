/* eslint-disable require-jsdoc */
class ShoppingCartPage {
  private SummaryCheckoutButton: string;

  constructor() {
    this.SummaryCheckoutButton = ".cart_navigation span";
  }


  public summaryCheckout(): void {
    cy.get(this.SummaryCheckoutButton).click();
  }
}

export {ShoppingCartPage};
