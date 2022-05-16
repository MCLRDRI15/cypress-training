import {UploadPage} from "../../page/index";

const fileName = "Mike.jpg";

describe("Upload File", () => {
  let uploadPage: UploadPage;

  before(() => {
    uploadPage = new UploadPage();
  });
  it("Should select a file to be upload and get the name to return it", () => {
    // Arrange
    uploadPage.visitUploadFilesPage();
    // Act
    uploadPage.setUploadFile(fileName);
    // Assert
    uploadPage.getUploadFile().should("contain", fileName);
  });
});
