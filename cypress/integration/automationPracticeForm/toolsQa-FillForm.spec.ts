import {PersonalFormPage} from "../../page/index";

const personalInformation = {
  name: "Michael",
  lastName: "Rios",
  email: "michael.rios@perficient.com",
  gender: "Male",
  mobileNumber: "3137906289",
  hobbies: ["Sports", "Music"],
  currentAddress: "Av siempreViva # 123",
  state: "Rajasthan",
  city: "Jaipur",
};

describe("The user navigates to the Tools-Qa page should", () => {
  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage();
  });

  it("", () =>{
    // Arrange
    personalFormPage.visitToolsQAForm();
    const submittingFormMessage = "Thanks for submitting the form";
    // Act
    personalFormPage.fillForm(personalInformation);
    // Assert
    personalFormPage.completeAllTheProcess()
        .should(
            "have.text",
            submittingFormMessage);
  });
});
