import ElementsPage from "../pageclass/ElementsPage"
import HomePage from "../pageclass/HomePage"

describe('TC01', () => {

    let data: any;
    before(function () {
        //"this" points at the test context object
        cy.fixture('elementsData').then((elementsData: any) => {
          // "this" is still the test context object
          data = elementsData
        })
      })

    beforeEach(function() {
        var website = Cypress.env('url')
        cy.visit(website)
        homePage.getElements().click()
        elementsPage.getWebTables().click()
    })

    const elementsPage = new ElementsPage()
    const homePage = new HomePage()

    it('Scenario A: Verify user can enter new data into table', () => {

        //Assert before adding a row 
        elementsPage.verifyTableRowCount('3')

        elementsPage.getAdd().click()
        elementsPage.addNewRegistrationForm(data.firstName, data.lastName, data.emailId, data.age, data.salary, data.department)

        //Assert after adding a row
        elementsPage.verifyTableRowCount('4')
        
        //Assert row data
        const arr = [data.firstName, data.lastName, data.age, data.emailId, data.salary, data.department]
        elementsPage.verifyRowData(4, arr) 

    })

    it('Scenario B: Verify user can edit the row in the table', () => {

        elementsPage.getEditButtonOf(data.firstName)
  
        const arrBeforeUpdate = [data.firstName, data.lastName]
        //Assert before row update
        elementsPage.verifyRowDataUpdated(2, arrBeforeUpdate)

        elementsPage.updateRowData(data.updatedFirstName, data.updatedLastName)

        const arrAfterUpdate = [data.updatedFirstName, data.updatedLastName]
        //Assert after row update
        elementsPage.verifyRowDataUpdated(2, arrAfterUpdate)

    })

})