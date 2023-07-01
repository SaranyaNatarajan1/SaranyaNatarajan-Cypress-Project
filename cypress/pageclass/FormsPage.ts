class FormsPage {

    getPracticeForm() {
        return cy.contains('Practice Form')
    }

    getFirstName() {
        return cy.get('#firstName')
    }

    getLastName() {
        return cy.get('#lastName')
    }

    getEmail() {
        return cy.get('#userEmail')
    }

    getGender(gender: string) {
        return cy.contains(gender)
    }

    getUserNumber() {
        return cy.get('#userNumber')
    }

    getDateOfBirth() {
        return cy.get('#dateOfBirthInput')
    }

    getSubject() {
        return cy.get('.subjects-auto-complete__input')
    }

    getHobbies(hobby: string) {
        return cy.contains(hobby)
    }

    getUploadImage() {
        return cy.get('#uploadPicture')
    }
    getCurrentAddress() {
        return cy.get('#currentAddress')
    }

    selectState(state: string) {
        cy.contains('Select State').type(state)
        cy.get('#react-select-3-option-0').click()
    }

    selectCity(city: string) {
        cy.contains('Select City').type(city)
        cy.get('#react-select-4-option-0').click()
    }

    getSubmit() {
        return cy.get('#submit')
    }

    getThanksMessage() {
        return cy.get('#example-modal-sizes-title-lg')
    }

    fillFormWithDetails(firstName: string, lastName: string, emailId: string, gender: string, userNumber: string, date: string, month: string, year: string, subject: string, hobby: string, image: string, address: string, state: string, city: string ) {

        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
        this.getEmail().type(emailId)
        this.getGender(gender).click()   
        this.getUserNumber().type(userNumber)

        this.getDateOfBirth().click()
        this.selectDateFromDatePicker(date, month , year)

        //CHECK THIS
        this.getSubject().click().focused()
        .type(subject, {force: true})

        this.getHobbies(hobby).click()

        //const image = 'G_logo.png'
        this.getUploadImage().attachFile(image)

        this.selectState(state)
        
        this.getCurrentAddress().type(address)
        this.selectCity(city)
        

    }

    selectDateFromDatePicker(date: string, month: string, year: string) {

        cy.get('.react-datepicker__month-container').should('be.visible')
        cy.get('.react-datepicker__month-select').select(month)
        cy.get('.react-datepicker__year-select').select(year)
        cy.get('.react-datepicker__day--0'+date+'').click()

    }

    verifyPracticeForm(arr: string[]) {

        cy.get('tbody > tr > td:nth-child(2)').each(($el1, index1) => {
            expect($el1.text()).to.equal(arr[index1])
            //cy.log($el1.text())
        })

    }

    closeForm() {
        return cy.get('#closeLargeModal')
    }

}

export default FormsPage;