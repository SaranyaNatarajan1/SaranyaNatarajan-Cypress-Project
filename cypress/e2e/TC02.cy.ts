/// <reference types = "Cypress" /> 
import { should } from "chai"
import ElementsPage from "../pageclass/ElementsPage"
import HomePage from "../pageclass/HomePage"


describe('TC02', () => {

    beforeEach(function() {
        var website = Cypress.env('url')
        cy.visit(website)
    })

    const elementsPage = new ElementsPage()
    const homePage = new HomePage()

    it('Verify broken image', () => {

        homePage.getElements().click()
        elementsPage.getBrokenLinksImages().click()

        elementsPage.getBrokenImage()
        .should('not.be.visible')
        .and($img => expect(($img[0] as HTMLImageElement).naturalHeight).not.to.be.gt(0))
        .and($img => expect(($img[0] as HTMLImageElement).naturalWidth).not.to.be.gt(0))

    })

})