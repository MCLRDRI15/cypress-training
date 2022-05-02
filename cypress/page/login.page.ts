/* eslint-disable require-jsdoc */
class LoginPage {
  private email: string;
  private password: string;
  private loginButton: string;

  constructor() {
    this.email = "#email";
    this.password = "#passwd";
    this.loginButton = "div.form_content button span i.icon-lock";
  }


  public emailType(): void {
    cy.get(this.email).type("aperdomobo@gmail.com");
  }

  public passwordType(): void {
    cy.get(this.password).type("WorkshopProtractor");
  }

  public loginValidated(): void {
    cy.get(this.loginButton).click();
  }
}

export {LoginPage};
