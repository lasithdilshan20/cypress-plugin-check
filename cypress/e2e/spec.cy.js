// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
Cypress.Commands.add("checkElement", { prevSubject: true }, ($subject) => {
  if ($subject.length > 0) {
    return cy.wrap($subject);
  } else {
    cy.log("Element not present. Skipping action.");
  }
});
describe('template spec', () => {
  it('passes', () => {
    cy.visit('cypress/index.html')
    cy.get('#fname1').checkElement().type('London')
  })
})