class BasePage {

    data: any;
    before(data: any) : any {
        //"this" points at the test context object
        cy.fixture('elementsData').then((elementsData: any) => {
          // "this" is still the test context object
          data = elementsData
          return data
        })

    }

    beforeEach() {
        var website = Cypress.env('url')
        cy.visit(website)
        // homePage.getElements().click()
        // elementsPage.getWebTables().click()
    }

}
