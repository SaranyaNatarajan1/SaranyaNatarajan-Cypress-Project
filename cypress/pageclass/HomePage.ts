class HomePage {

    getElements() {
        return cy.contains('Elements')
    }

    getForms() {
        return cy.contains('Forms')
    }

    getWidgets() {
        return cy.contains('Widgets')
    }

    getInteractions() {
        return cy.contains('Interactions')
    }

}

export default HomePage;