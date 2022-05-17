/* eslint-disable require-jsdoc */
interface PersonalInformationTypes {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  mobileNumber:string;
  hobbies: string[];
  currentAddress: string;
  state: string;
  city: string;
}

class PersonalFormPage {
  private toolsQaFormURL: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: string;
  private mobileNumber: string;
  private hobbies: string;
  private currentAddresss: string;
  private submit: string;
  private submitting: string;
  private state: string;
  private city: string;

  constructor() {
    this.toolsQaFormURL = "https://demoqa.com/automation-practice-form";
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.email = "#userEmail";
    this.gender = "#genterWrapper input";
    this.mobileNumber = "#userNumber";
    this.hobbies = "#hobbiesWrapper .col-md-9";
    this.currentAddresss = "#currentAddress";
    this.state = "#state";
    this.city = "#city";
    this.submit = "#userForm";
    this.submitting = ".modal-title";
  }

  public completeAllTheProcess(): any {
    return cy.get(this.submitting);
  }

  private findGenderByName(name: string): any {
    return cy.get(this.gender).filter(`[value="${name}"]`);
  }

  private findHobbiesByName(hobbies: string[]): any {
    hobbies.forEach((hobby) => {
      cy.get(this.hobbies).find(`label:contains("${hobby}")`).click();
    });
  }

  public visitToolsQAForm(): void {
    cy.visit(this.toolsQaFormURL);
  }

  public fillForm(personalInformation: PersonalInformationTypes): void {
    cy.get(this.firstName).type(personalInformation.name);
    cy.get(this.lastName).type(personalInformation.lastName);
    cy.get(this.email).type(personalInformation.email);
    this.findGenderByName(personalInformation.gender).check({force: true});
    cy.get(this.mobileNumber).type(personalInformation.mobileNumber);
    this.findHobbiesByName(personalInformation.hobbies);
    cy.get(this.currentAddresss).type(personalInformation.currentAddress);
    cy.get(this.state).click().type(`${personalInformation.state}{enter}`);
    cy.get(this.city).click();
    cy.get(this.city).type(`${personalInformation.city}{enter}`);
    cy.get(this.submit).submit();
  }
};

export {PersonalFormPage};
