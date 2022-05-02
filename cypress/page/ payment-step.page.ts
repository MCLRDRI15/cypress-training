/* eslint-disable require-jsdoc */
class PaymentStepPage {
  private OrderComplete: string;

  constructor() {
    this.OrderComplete = "#center_column > div > p > strong";
  }


  public completeAllTheProcess(): void {
    cy.get(this.OrderComplete).should(
        "have.text",
        "Your order on My Store is complete.",
    );
  }
}

export {PaymentStepPage};
