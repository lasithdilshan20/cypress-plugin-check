// @ts-check
/// <reference path="../../src/index.d.ts" />
import '../../commands'
describe('cypress-plugin-check', () => {

    it('Test Commands', () => {
        cy.visit('cypress/index.html')
        // Present Elements Actions
        cy.checkElement('#btn').click();
        cy.checkElement('#fname').type('Alexis');
        cy.checkElement('#lname').type('Texas');
        cy.checkElement('#ta').type('This is a test');
        cy.checkElement('#rdored').check();
        cy.checkElement('#rdoblue').check();
        cy.checkElement('#rdogreen').check();
        cy.checkElement('#chk').check();
        cy.checkElement('#dd').select('volvo');

        // Not Present Elements Actions
        cy.checkElement('#Notbtn').click();
        cy.checkElement('#Notfname').type('Alexis');
        cy.checkElement('#Notlname').type('Texas');
        cy.checkElement('#Notta').type('This is a test');
        /*cy.checkElement('#Notrdored').check();
        cy.checkElement('#Notrdoblue').check();
        cy.checkElement('#Notrdogreen').check();
        cy.checkElement('#Notchk').check();
        cy.checkElement('#Notdd').select('volvo');*/

        // Not Present Elements Assertion
        cy.softAssertElement('#myButton');
        cy.softAssertElement('#fname');
    })
})