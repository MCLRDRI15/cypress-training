/* eslint-disable require-jsdoc */
class PaymentStepPage {
  private OrderComplete: string;

  constructor() {
    this.OrderComplete = "#center_column > div > p > strong";
  }


  public completeAllTheProcess(): any {
    return cy.get(this.OrderComplete);
  }
}

export {PaymentStepPage};
