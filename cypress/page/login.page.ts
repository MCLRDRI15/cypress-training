/* eslint-disable require-jsdoc */
class LoginPage {
  private emailType: string;
  private passwordType: string;
  private loginButton: string;

  constructor() {
    this.emailType = "form div.form-group > input#email";
    this.passwordType = "form div.form-group > span input#passwd";
    this.loginButton = "div.form_content button span i.icon-lock";
  }


  public login(email:string, password:string): void {
    cy.get(this.emailType).type(email);
    cy.get(this.passwordType).type(password);
  }

  public loginValidate(): void {
    cy.get(this.loginButton).click();
  }
}

export {LoginPage};
