import {MenuContentPage, DressesListPage} from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    // ... realiza la prueba

    // Arrange
    menuContentPage.visitMenuContentPage();
    const allDressesNames =
     ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];

    // Act
    menuContentPage.goToDressesMenu();
    dressesListPage.getDressProducts();

    // Assert
    dressesListPage.validateItemsNumber(allDressesNames.length);
    dressesListPage.validateItemsNames(allDressesNames);
  });
});
