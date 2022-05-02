/* eslint-disable require-jsdoc */
class ShippingStepPage {
  private AgreeTerms: string;
  private Checkout: string;
  private Bankwire: string;
  private ConfirmOrder: string;

  constructor() {
    this.AgreeTerms = "div.checker input";
    this.Checkout = "p.cart_navigation button[name='processCarrier']";
    this.Bankwire = "p.payment_module a.bankwire";
    this.ConfirmOrder = "p#cart_navigation button span";
  }


  public agreeTerms(): void {
    cy.get(this.AgreeTerms).click();
  }

  public checkout(): void {
    cy.get(this.Checkout).click();
  }

  public paymentModeSelect(): void {
    cy.get(this.Bankwire).click();
  }

  public confirmOrder(): void {
    cy.get(this.ConfirmOrder).click();
  }
}

export {ShippingStepPage};
