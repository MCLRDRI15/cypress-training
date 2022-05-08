/* eslint-disable require-jsdoc */
class PaymentStepPage {
  private OrderComplete: string;
  private Bankwire: string;
  private ConfirmOrder: string;

  constructor() {
    this.Bankwire = "a.bankwire";
    this.ConfirmOrder = "#cart_navigation span";
    this.OrderComplete = ".cheque-indent > strong.dark";
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
