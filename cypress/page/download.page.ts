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

  setDownloadFile() {
    cy.get(this.downloadTxtFile).type("this is the first test sentence to generate the Txt download file");
    cy.get(this.generateTxtFile).click();
    cy.get(this.TxtDownloadButton).click();
    cy.get(this.downloadPdfFile).type("this is the first test sentence to generate the PDF download file");
    cy.get(this.generatePdfFile).click();
    cy.get(this.TxtDownPdfButton).click();
  }

  getDownloadTxtFile(): any {
    return cy.readFile("cypress/downloads/info.txt");
  }

  getDownloadPDFFile(): any {
    return cy.readFile("cypress/downloads/info.pdf");
  }
}

export {DownloadPage};
