import {UploadPage} from "../../page/index";
import {DownloadPage} from "../../page/download.page";

const fileName = "Mike.jpg";
const txtContent = "this is the first test sentence to generate the Txt download file";
const pdfContent = "this is the first test sentence to generate the PDF download file";

describe("Upload File", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;

  before(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
  });
  it("Should select a file to be upload and get the name to return it", () => {
    // Arrange
    uploadPage.visitUploadFilesPage();
    // Act
    uploadPage.setUploadFile(fileName);
    // Assert
    uploadPage.getUploadFile().should("contain", fileName);
  });

  it("Should select a file to be download and get the name to return it", () => {
    // Arrange
    downloadPage.visitDownloadFilesPage();
    // Act
    downloadPage.setDownloadFile();
    // Assert
    downloadPage.getDownloadTxtFile()
        .should("eq", txtContent);
    downloadPage.getDownloadPDFFile()
        .should("eq", pdfContent);
  });
});
