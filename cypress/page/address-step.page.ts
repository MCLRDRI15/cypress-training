/* eslint-disable require-jsdoc */
class AddressStepPage {
  private AddressCheckout: string;

  constructor() {
    this.AddressCheckout = "p.cart_navigation button";
  }

  public checkout(): void {
    cy.get(this.AddressCheckout).click();
  }
}

export {AddressStepPage};
