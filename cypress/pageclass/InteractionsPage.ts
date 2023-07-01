class InteractionsPage {

    getDroppable() {
        return cy.contains('Droppable')
    }

    getDragMe() {
        return cy.get('#draggable')
    }

    getDropHere() {
        return cy.get('#simpleDropContainer > #droppable')
    }

    getDropHereText() {
        return cy.get('#droppable p')
    }

}

export default InteractionsPage;