import {MenuContentPage, DressesListPage} from "../../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let allDressesNames: string[];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    allDressesNames =
     ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];
  });

  it("show the available dresses", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToDressesMenu();
    dressesListPage.getDressProducts();

    // Assert
    dressesListPage.validateItemsNumber(allDressesNames.length);
    dressesListPage.validateItemsNames(allDressesNames);
  });
});
