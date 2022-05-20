/* eslint-disable require-jsdoc */
class UploadPage {
  private pageURL: string;
  private browserFile: string;
  private uploadButton: string;
  private uploadedFileName: string;

  constructor() {
    this.pageURL = "http://demo.automationtesting.in/FileUpload.html";
    this.browserFile = "#input-4";
    this.uploadButton = "[title='Upload selected files']";
    this.uploadedFileName = ".file-footer-caption";
  }

  visitUploadFilesPage() {
    cy.visit(this.pageURL);
  }

  setUploadFile(fileName: string) {
    cy.get(this.browserFile).attachFile(fileName);
    cy.get(this.uploadButton).click();
  }

  getUploadedFileName() {
    return cy.get(this.uploadedFileName);
  }
}

export {UploadPage};
