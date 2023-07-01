import HomePage from "../pageclass/HomePage"
import InteractionsPage from "../pageclass/InteractionsPage"

describe('TC06', () => {

    let data: any;
    before(function () {
        //"this" points at the test context object
        cy.fixture('interactionsData').then((interactionsData: any) => {
          // "this" is still the test context object
          data = interactionsData
        })
        var website = Cypress.env('url')
        cy.visit(website)
      })

        const homePage = new HomePage()
        const interactionsPage = new InteractionsPage()
        it('Verify user can drag and drop', () => {

            homePage.getInteractions().click()

            interactionsPage.getDroppable().click()

            //Assert drop box before dragging the element
            interactionsPage.getDropHereText().then((txt) => {
                expect(txt.eq(0).text()).to.be.equal(data.beforeDragText)
            })

            cy.get('#draggable').drag('#droppable', {force: true})

            //Assert drop box after dragging the element
            interactionsPage.getDropHereText().then((txt) => {
                expect(txt.eq(0).text()).to.be.equal(data.afterDragText)
            })

        })


})