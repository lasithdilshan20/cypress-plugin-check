// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
Cypress.Commands.add('checkElement', { prevSubject: false }, (selector) => {
  cy.log('**checkElement**')
  return cy.get('body',{log: false}).then(($body) => {
    const element = $body.find(selector);
    const found = element.length > 0;

    if (found) {
      return cy.wrap(element,{log: false});
    } else {
      const callingCommand = ``;
      const logMessage = `Element ${selector} not present. Command skipped. ${callingCommand}`;
      Cypress.log({
        name: 'customGet',
        message: logMessage,
        displayName: 'Custom Get'
      });
    }
  });
});


describe('template spec', () => {
  it('passes', () => {
    cy.visit('cypress/index.html')

    cy.checkElement('#myButton').then(($element) => {
      cy.wrap($element).click();
    });

    cy.checkElement('#fname1').then(($element) => {
      cy.wrap($element).type('Alexis');
    });

    cy.checkElement('#lname').then(($element) => {
      cy.wrap($element).type('Texas');
    });

  })
})