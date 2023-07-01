class WidgetsPage {

    getProgressBar() {
        return cy.contains('Progress Bar')
    }

    getToolTips() {
        return cy.contains('Tool Tips')
    }

    getStartButton() {
        return cy.get('#startStopButton')
    }

    getResetButton() {
        return cy.get('#resetButton', {timeout: 10000})
    }

    getProgressBarId() {
        return cy.get("#progressBar div[role='progressbar']")
    }

    getHoverMeToSeeButton() {
        return cy.get('#toolTipButton')
    }

    getToolTip() {
        return cy.get('div.tooltip-inner')
    }
}

export default WidgetsPage;