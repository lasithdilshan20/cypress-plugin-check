// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
Cypress.Commands.add('checkElement', { prevSubject: false }, (selector) => {
  cy.log('**checkElement**');
  return cy.get('body', { log: false }).then(($body) => {
    const element = $body.find(selector);
    const found = element.length > 0;

    if (found) {
      return cy.wrap(element, { log: false });
    } else {
      const logMessage = `Element '${selector}' not present. Command skipped.`;
      Cypress.log({
        name: 'checkElement',
        message: logMessage,
        displayName: 'Custom checkElement'
      });
    }
  });
});

Cypress.Commands.add('softAssertElement', { prevSubject: false }, (selector) => {
  cy.log('**softAssertElement**');
  return cy.checkElement(selector).then(($element) => {
    if ($element.length === 0) {
      const logMessage = `Element '${selector}' not present. Warning: Element not found.`;
      Cypress.log({
        name: 'softAssertElement',
        message: logMessage,
        displayName: 'Soft Assert Element',
        consoleProps: () => {
          return {
            Selector: selector,
            Status: 'Element not found',
          };
        },
      });
    }
  });
});


describe('template spec', () => {
  it('passes', () => {
    cy.visit('cypress/index.html')
    cy.checkElement('#myButton').click();
    cy.checkElement('#fname1').type('Alexis');
    cy.checkElement('#lname').type('Texas');

    cy.softAssertElement('#myButton');
    cy.softAssertElement('#fname1');
  })
})