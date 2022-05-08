/* eslint-disable require-jsdoc */
class LoginPage {
  private emailType: string;
  private passwordType: string;
  private loginButton: string;

  constructor() {
    this.emailType = "#email";
    this.passwordType = "#passwd";
    this.loginButton = "#SubmitLogin";
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
