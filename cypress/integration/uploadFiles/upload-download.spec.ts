import {UploadPage} from "../../page/index";
import {DownloadPage} from "../../page/download.page";

const fileName = "Mike.jpg";
const txtContent = "this is the first test sentence to generate the Txt download file";
const pdfContent = "this is the first test sentence to generate the PDF download file";
const txtPath = "cypress/downloads/info.txt";
const pdfPath = "cypress/downloads/info.pdf";

describe("The user should navigates", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;

  before(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
  });
  it("the user Should select a file to be uploaded and get the name to return it", () => {
    // Arrange
    uploadPage.visitUploadFilesPage();
    // Act
    uploadPage.setUploadFile(fileName);
    // Assert
    uploadPage.getUploadedFileName().should("contain", fileName);
  });

  it("The user Should select a file to be download and get the name to return it", () => {
    // Arrange
    downloadPage.visitDownloadFilesPage();
    // Act
    downloadPage.setTxtContent(txtContent);
    downloadPage.setDownloadTxtFile();
    downloadPage.setPdfContent(pdfContent);
    downloadPage.setDownloadPdfFile();
    // Assert
    downloadPage.getFileContent(txtPath)
        .should("eq", txtContent);
    downloadPage.getFileContent(pdfPath)
        .should("eq", pdfContent);
  });
});
