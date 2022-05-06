/* eslint-disable require-jsdoc */
class ShippingStepPage {
  private AgreeTerms: string;
  private Checkout: string;

  constructor() {
    this.AgreeTerms = "div.checker input[name='cgv']";
    this.Checkout = "p.cart_navigation button[name='processCarrier']";
  }


  public acceptTerms(): void {
    cy.get(this.AgreeTerms).click();
  }

  public checkout(): void {
    cy.get(this.Checkout).click();
  }
}

export {ShippingStepPage};
