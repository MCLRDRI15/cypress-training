/* eslint-disable require-jsdoc */
class AddressStepPage {
  private textArea: string;
  private AddressInput: string;
  private AddressCheckout: string;

  constructor() {
    this.textArea = "#ordermsg";
    this.AddressInput = "div.checker input";
    this.AddressCheckout = "p.cart_navigation button";
  }


  public textAreaType(): void {
    cy.get(this.textArea).type("aperdomobo@gmail.com");
  }

  public addressChecker(): void {
    cy.get(this.AddressInput).click();
  }

  public checkout(): void {
    cy.get(this.AddressCheckout).click();
  }
}

export {AddressStepPage};
