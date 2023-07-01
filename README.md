# Cypress GUI and API Automation tests using TypeScript 

UI Tests Include: <br />

TC01: Scenario A: Verify user can enter new data into table <br />
           Scenario B: Verify user can edit the row in the table <br />
TC02: Verify broken image <br />
TC03: Verify user can submit the form. <br />
TC04: Verify the progress bar <br />
TC05: Verify the tooltip <br />
TC06: Verify user can drag and drop <br />

API Tests Include: <br />

API01: User Account Creation <br />
API02: Add a list of books <br />
API03: Remove one of the added books


# Introduction

This project is built using Cypress Automation tool in TypeScript which follows Page Object Model. 
Mocha along with Cypress in-built fixture's Data-Driven testing framework is been used which helps to add, update, manage data separately, independent of scripts. Assertions used are Chai <br />

# Application Under Test: https://demoqa.com/ 

# Steps to run the tests

1: To run with Cypress UI

npx cypress open

2: To run with CLI and without UI:

npx cypress run

# Report 

HTML reports are generated using Mochawesome located under - **/SaranyaNatarajan-Cypress-Project/cypress/reports** in **index.html**
