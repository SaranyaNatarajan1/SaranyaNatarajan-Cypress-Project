import { should } from "chai"
import HomePage from "../pageclass/HomePage"
import WidgetsPage from "../pageclass/WidgetsPage"

describe('TC05', () => {

    let data: any;
    before(function () {
        //"this" points at the test context object
        cy.fixture('widgetsData').then((widgetsData: any) => {
          // "this" is still the test context object
          data = widgetsData
        })
        var website = Cypress.env('url')
        cy.visit(website)
      })

    const homePage = new HomePage()
    const widgetsPage = new WidgetsPage()

    it('Verify the tooltip', () => {

        homePage.getWidgets().click()

        widgetsPage.getToolTips().click()
        widgetsPage.getHoverMeToSeeButton().click()

        //Assert tool tip text
        widgetsPage.getToolTip().should('be.visible').then((txt) => {
            expect(txt.text()).to.be.equal(data.widgetText)
        })  

    })

})
