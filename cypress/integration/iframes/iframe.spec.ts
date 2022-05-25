import {IframePage} from "../../page";


describe("The user should navigates to W3School page", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage();
  });

  it("The user should be able to see the title HTML Tutorials inside the iframe tag", () => {
    // Arrange
    iframePage.visit();
    // Assert
    iframePage.getFrameTitle().should("include.text", "HTML Tutorial");
  });

  it("The user should be able to navigate to CSS Tutorials inside the iframe tag", () => {
    // Arrange
    iframePage.visit();
    // Action
    iframePage.goToCssPageInFrame();
    // Assert
    iframePage.getFrameTitle().should("include.text", "CSS Tutorial");
  });
});
