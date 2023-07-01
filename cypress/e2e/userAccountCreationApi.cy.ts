describe('API01', () => {

    let data: any;

    before(function () {
        //"this" points at the test context object
        cy.fixture('apiData').then((apiData: any) => {
          // "this" is still the test context object
          data = apiData
        })
    })

    it('User Account Creation', () => {     //it had only

        let username = (Math.random() + 1).toString(36).substring(7);

        cy.createUser(username, data.password).then(function(response) {

            expect(response.isOkStatusCode)
            const userId = response.body['userID']
            expect(userId).to.be.not.null
            const userName = response.body['username']
            expect(userName).to.be.equal(username)      

        })
        
    })


})