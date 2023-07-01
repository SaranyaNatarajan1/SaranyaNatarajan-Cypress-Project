import HomePage from "../pageclass/HomePage"
import WidgetsPage from "../pageclass/WidgetsPage"

describe('TC04', () => {

    beforeEach(function() {
        var website = Cypress.env('url')
        cy.visit(website)
    })

    const homePage = new HomePage()
    const widgetsPage = new WidgetsPage()

    it('Verify the progress bar', () => {

        homePage.getWidgets().click()

        widgetsPage.getProgressBar().click()
        widgetsPage.getStartButton().click()

        //Assert 'Start' button changes to 'Reset' button
        widgetsPage.getResetButton().should('exist')
        //Assert 100% progressbar
        widgetsPage.getProgressBarId().should('have.attr', 'aria-valuenow', '100')

    })


})
