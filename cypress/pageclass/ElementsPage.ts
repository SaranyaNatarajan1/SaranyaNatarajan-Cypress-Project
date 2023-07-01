class ElementsPage {

    getWebTables() {
        return cy.contains('Web Tables')
    }

    getBrokenLinksImages() {
        return cy.contains('Broken Links - Images')
    }

    getAdd() {
        return cy.get('#addNewRecordButton')
    }

    getFirstName() {
        return cy.get('#firstName')
    }

    getLastName() {
        return cy.get('#lastName')
    }

    getAge() {
        return cy.get('#age')
    }

    getEmail() {
        return cy.get('#userEmail')
    }

    getSalary() {
        return cy.get('#salary')
    }

    getDepartment() {
        return cy.get('#department')
    }

    getSubmit() {
        return cy.get('#submit')
    }


    //table test case

    addNewRegistrationForm(firstName: string, lastName: string, emailId: string, age: string, salary: string, department: string) {

        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
        this.getEmail().type(emailId)
        this.getAge().type(age)
        this.getSalary().type(salary)
        this.getDepartment().type(department)
        this.getSubmit().click()

    }

    updateRowData(updatedFirstName: string, updatedLastName: string) {
        this.getFirstName().clear().type(updatedFirstName)
        this.getLastName().clear().type(updatedLastName)
        this.getSubmit().click()
    }

    getEditButtonOf(name: string) {
        cy.get('.rt-tr-group:nth-child(2) .rt-td:nth-child(1)').then(($fName) => {
            if ($fName.text() == name) {
                cy.get('#edit-record-2').click()
            }
        })
    }

    verifyRowData(rowNumber: Number, rowData: string[]) {

        cy.get('.rt-tr-group:nth-child('+rowNumber+') .rt-td:not(:last-child)').each(($el, index) => {

            expect($el.text()).to.be.equal(rowData[index])

        })
    }

    verifyTableRowCount(length: string) {
        cy.get('.action-buttons').should('have.length', length)
    }

    verifyRowDataUpdated(rowNumber: Number, rowData: string[]) {

        cy.get('.rt-tr-group:nth-child('+rowNumber+') .rt-td:nth-child(-n+2)').each(($el, index) => {
            const newIndex = index+1
            cy.get('.rt-tr-group:nth-child('+rowNumber+') .rt-td:nth-child('+newIndex+')').each(($ele) => {
               cy.log($ele.text())
                    expect($ele.text()).to.be.equal(rowData[index])
            })
        })

    }

    //Broken Image

    getBrokenImage() {
        return cy.get("img[src='/images/Toolsqa_1.jpg']")
    }


}

export default ElementsPage;