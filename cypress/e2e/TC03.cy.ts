///<reference types = "Cypress" />

import FormsPage from "../pageclass/FormsPage"
import HomePage from "../pageclass/HomePage"

describe('TC03', () => {

    let data: any;
    before(function () {
        //"this" points at the test context object
        cy.fixture('formsData').then((formsData: any) => {
          // "this" is still the test context object
          data = formsData
        })
        var website = Cypress.env('url')
        cy.visit(website)
      })

    const homePage = new HomePage()
    const formsPage = new FormsPage()

    it('Verify user can submit the form.', () => {

        homePage.getForms().click()

        formsPage.getPracticeForm().click()
        formsPage.fillFormWithDetails(data.firstName, data.lastName, data.emailId, data.gender, data.userNumber, data.date, data.month, data.year, data.subject, data.hobby, data.image, data.address, data.state, data.city)
        formsPage.getSubmit().click({force: true})

        formsPage.getThanksMessage().then((txt) => {
            expect(txt.text()).to.be.equal(data.thanksMsg)
        })

        const fullName = data.firstName + " " + data.lastName
        const fullDate = data.date + " " + data.month + "," + data.year
        const stateAndCity = data.state + " " + data.city
        const valueArr = [fullName, data.emailId, data.gender, data.userNumber, fullDate, '', data.hobby, data.image, data.address, stateAndCity]
        formsPage.verifyPracticeForm(valueArr)

        formsPage.closeForm().click()

    })


})