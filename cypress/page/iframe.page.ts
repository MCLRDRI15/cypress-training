/* eslint-disable require-jsdoc */
class IframePage {
  private urlPage: string;
  private titleSelect: string;
  private cssPagebutton: string;

  constructor() {
    this.urlPage = "https://www.w3schools.com/html/html_iframe.asp";
    this.titleSelect = "[title='W3Schools HTML Tutorial']";
    this.cssPagebutton = "a[title='CSS Tutorial']";
  }
  public visit(): void {
    cy.visit(this.urlPage);
  }

  public getFrameTitle(): any {
    return cy.get(this.titleSelect).its("0.contentDocument").its("body").then(cy.wrap).find("h1");
  }

  public goToCssPageInFrame(): any {
    cy.get(this.titleSelect).its("0.contentDocument").its("body").then(cy.wrap).find(this.cssPagebutton).click();
    return cy.get(this.titleSelect).its("0.contentDocument").its("body").then(cy.wrap)
        .filter(":contains('CSS Tutorial')");
  }
}

export {IframePage};
