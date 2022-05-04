/* eslint-disable require-jsdoc */
class PaymentStepPage {
  private OrderComplete: string;
  private Bankwire: string;
  private ConfirmOrder: string;

  constructor() {
    this.Bankwire = "p.payment_module a.bankwire";
    this.ConfirmOrder = "p#cart_navigation button span";
    this.OrderComplete = "#center_column > div > p > strong";
  }


  public completeAllTheProcess(): any {
    return cy.get(this.OrderComplete);
  }

  public paymentModeSelect(): void {
    cy.get(this.Bankwire).click();
  }

  public confirmOrder(): void {
    cy.get(this.ConfirmOrder).click();
  }
}

export {PaymentStepPage};
