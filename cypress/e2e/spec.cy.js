// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
let command;
let currentCommand;
const chalk = require('chalk');
const warningIcon = '⚠️';
function getMainCommandName() {
  command = cy.state('current')
  currentCommand = command.attributes.next.attributes.name;
}
Cypress.Commands.add('checkElement', { prevSubject: false }, (selector) => {
  getMainCommandName();
  return cy.get('body', { log: false }).then(($body) => {
    const element = $body.find(selector);
    const found = element.length > 0;

    if (found) {
      return cy.wrap(element, { log: false });
    } else {
      const logMessage = `${warningIcon } Element '${selector}' not present. Command '${currentCommand}' skipped.`;
      Cypress.log({
        name: 'checkElement',
        message: logMessage,
        displayName: 'checkElement'
      });
    }
  });
});
Cypress.Commands.add('checkElement0', { prevSubject: false }, (selector) => {
  return cy.get(selector, { timeout: 0 }).then(($element) => {
    if ($element.length === 0) {
      const warningIcon = '⚠️';
      const logMessage = `Element '${selector}' not present. ${warningIcon} Warning: Element not found.`;
      Cypress.log({
        name: 'checkElement',
        message: logMessage,
        displayName: 'Check Element',
        consoleProps: () => {
          return {
            Selector: selector,
            Status: 'Element not found',
          };
        },
        icon: 'warning',
        level: 'warn',
      });
      return null; // Return null when element is not found
    } else {
      return cy.wrap($element, { log: false }).first().then(($el) => {
        if ($el.is(':checkbox') || $el.is(':radio')) {
          return cy.wrap($el).check({ force: true, log: false });
        } else {
          return cy.wrap($el, { log: false });
        }
      });
    }
  });
});


Cypress.Commands.add('softAssertElement', { prevSubject: false }, (selector) => {
  return cy.get('body', { log: false }).then(($body) => {
    const element = $body.find(selector);
    const found = element.length > 0;

    if (found) {
      return cy.wrap(element, { log: false }).should('exist');
    } else {
      const logMessage = chalk.keyword('orange')(`${warningIcon} Element '${selector}' not present. Warning: Element not found.`);
      Cypress.log({
        name: 'softAssertElement',
        message: logMessage,
        displayName: 'softAssertElement',
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