/* eslint-disable require-jsdoc */
class DownloadPage {
  private pageURL: string;
  private downloadTxtFile: string;
  private generateTxtFile: string;
  private TxtDownloadButton: string;

  private downloadPdfFile: string;
  private generatePdfFile: string;
  private TxtDownPdfButton: string;

  constructor() {
    this.pageURL = "http://demo.automationtesting.in/FileDownload.html";
    this.downloadTxtFile = "#textbox";
    this.generateTxtFile = "#createTxt";
    this.TxtDownloadButton = "#link-to-download";
    this.downloadPdfFile = "#pdfbox";
    this.generatePdfFile = "#createPdf";
    this.TxtDownPdfButton = "#pdf-link-to-download";
  }

  visitDownloadFilesPage() {
    cy.visit(this.pageURL);
  }

  setTxtContent(content: string) {
    cy.get(this.downloadTxtFile).type(content);
  }

  setDownloadTxtFile() {
    cy.get(this.generateTxtFile).click();
    cy.get(this.TxtDownloadButton).click();
  }

  setPdfContent(content: string) {
    cy.get(this.downloadPdfFile).type(content);
  }

  setDownloadPdfFile() {
    cy.get(this.generatePdfFile).click();
    cy.get(this.TxtDownPdfButton).click();
  }

  getFileContent(path: string): any {
    return cy.readFile(path);
  }
}

export {DownloadPage};
