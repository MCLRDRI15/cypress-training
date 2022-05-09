/* eslint-disable require-jsdoc */
class AddressStepPage {
  private AddressCheckout: string;

  constructor() {
    this.AddressCheckout = "button[name='processAddress']";
  }

  public checkout(): void {
    cy.get(this.AddressCheckout).click();
  }
}

export {AddressStepPage};
