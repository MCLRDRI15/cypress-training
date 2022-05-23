import {IframePage} from "../../page";

const pageHTMLTitle = "HTML Tutorial";
const pageCSSTitle = "CSS Tutorial";

describe("The user should navigates to W3School page", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage();
  });

  it("The user should be able to see the title HTML Tutorials inside the iframe tag", () =>{
    // Arrange
    iframePage.visit();
    // Act
    const titleHTMLComponent = iframePage.getFrameTitle();
    // Assert
    titleHTMLComponent.should("include.text", pageHTMLTitle);
  });

  it("The user should be able to navigate to CSS Tutorials inside the iframe tag", () =>{
    // Arrange
    iframePage.visit();
    // Act
    const titleCSSComponent = iframePage.goToCssPageInFrame();
    // Assert
    titleCSSComponent.should("include.text", pageCSSTitle);
  });
});
