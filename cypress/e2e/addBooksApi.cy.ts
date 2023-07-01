
describe('API02', () => {

    let data: any;
    let userId: any;
    let token: any;

    before(function () {
        //"this" points at the test context object
        cy.fixture('apiData').then((apiData: any) => {
          // "this" is still the test context object
          data = apiData
        })
    })

    before(function () {

        let username = (Math.random() + 1).toString(36).substring(7);

        cy.createUser(username, data.password).then(function(response) {
    
            expect(response.isOkStatusCode)
            userId = response.body['userID']
            cy.log(userId)

        })
    
        cy.generateToken(username, data.password).then(function(response) {
    
            expect(response.isOkStatusCode)
            token = response.body['token']
            cy.log(token)
                
        })    
    })

    it('Add a list of books - Positive Case', () => {

    cy.addBooks(data.book1, data.book2, userId, token).then(function(response) {

            expect(response.body['books'].length).to.be.equal(2)
            // expect(response.body['books']['isbn'][0]).to.be.equal(data.book1)
            expect(response).property('status').to.equal(201) // new entity created
            cy.verifyCreatedBook(0, data.book1, response)
            cy.verifyCreatedBook(1, data.book2, response)

        })
    })

    // it('Add a list of books - Negative Case', () => {

    //     cy.addBooks(data.book1, data.book2, userId, token).then(function(response) {
    
    //             expect(response.body['books'].length).to.be.equal(2)
    //             // expect(response.body['books']['isbn'][0]).to.be.equal(data.book1)
    //             expect(response).property('status').to.equal(201) // new entity created
    //             cy.verifyCreatedBook(0, data.book1, response)
    //             cy.verifyCreatedBook(1, data.book2, response)
    
    //     })
    // })

    // it('Remove one of the added books', () => {

    // cy.request({

    //     method : 'DELETE',
    //     url: 'https://demoqa.com/BookStore/v1/Book',
    //     body: 
    //         {
    //             "userId": userId,
    //             "isbn": "book1"
    //         }, 
    //         headers: 
    //         {
    //             Authorization: `Bearer ${ token }`,
    //         }
    //     }).then(function(response) {

    //         expect(response.isOkStatusCode)
             //cy.log(response.body)
             //console.log(response.body)
    //         expect(response.body['isbn']).to.equal('book1')
    //         expect(response.body['userId']).to.equal(userId)
    //         cy.log(response.body['message'])

    //     })
    // })

})