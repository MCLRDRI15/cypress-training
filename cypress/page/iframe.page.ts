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
    return cy.iframe(this.titleSelect).find("h1").its(0);
  }

  public goToCssPageInFrame():any {
    cy.iframe(this.titleSelect).find(this.cssPagebutton).click();
    cy.frameLoaded(this.titleSelect, {
      url: "https://www.w3schools.com/css/default.asp",
    });
  }
}

export {IframePage};
