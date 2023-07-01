
describe('API03', () => {

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


    it('Remove one of the added books', () => {

        cy.addBooks(data.book1, data.book2, userId, token).then(function(response){

            expect(response.isOkStatusCode)

        })

        cy.deleteBook(data.book1, userId, token).then(function(response) {

            expect(response).property('status').to.equal(204) // new entity created
            // cy.log(response.body)
            // cy.log(response)
            // //cy.log(response.body['isbn'])
            // expect(response.body['userId']).to.equal(userId)
            // cy.log(response.body['message'])

        })
    })  

})