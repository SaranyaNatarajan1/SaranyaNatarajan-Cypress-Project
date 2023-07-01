/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
        createUser(username: string, password: string): Chainable<any>
        generateToken(username: string, password: string): Chainable<any>
        verifyCreatedBook(index: number, bookname: string, response: any): Chainable<void>
        addBooks(book1: string, book2: string, userId: any, token: any): Chainable<any>
        deleteBook(book1: string, userId: any, token: any): Chainable<any>
    }
  }
}

Cypress.Commands.add('createUser', (username: string, password: string) : any => {

    cy.request({

        method : 'POST',
        url: Cypress.env('url')+'Account/v1/User',
        body: 
        {
            "userName": username,
            "password": password
        }, 
        headers: 
        {
            "content-type": "application/json"
        }

    }).then(function(response) {
        return response
    })
    

 })

 Cypress.Commands.add('generateToken', (username: string, password: string) : any => {

    cy.request({
    
        method : 'POST',
        url: Cypress.env('url')+'Account/v1/GenerateToken',
        body: 
        {
            "userName": username,
            "password": password
        }, 
        headers: 
        {
            "content-type": "application/json"
        }

    }).then(function(response) {
        return response
    })
    

 })

 Cypress.Commands.add('addBooks', (book1: string, book2: string, userId: any, token: any) : any => {

    cy.request({
        method : 'POST',
        url: Cypress.env('url')+'BookStore/v1/Books',
        body: 
            {
                "userId": userId,
                "collectionOfIsbns": [
                {
                    "isbn": book1
                }, 
                {
                    "isbn": book2
                }
                ]
            }, 
        headers: 
            {
                Authorization: `Bearer ${ token }`,
            }

        }).then(function(response) {

            return response

    })

})

Cypress.Commands.add('deleteBook', (book1: string, userId: any, token: any) : any => {

    cy.request({

        method : 'DELETE',
        url: Cypress.env('url')+'BookStore/v1/Book',
        body: 
            {
                "userId": userId,
                "isbn": book1
            }, 
        headers: 
            {
                Authorization: `Bearer ${ token }`,
            }
        }).then(function(response){
            return response
    })

})


 Cypress.Commands.add('verifyCreatedBook', (index: number, bookname: string, response: any) => {

    expect(response.body.books[index]).to.deep.equal({
        'isbn' : bookname
    })
    
 })

 Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


import 'cypress-file-upload';
import 'cypress-wait-until';
import '@4tw/cypress-drag-drop';
import "cypress-real-events/support";

