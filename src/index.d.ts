// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        check(element: string): Chainable<JQuery<HTMLElement>>
        softAssert(): Chainable<JQuery<HTMLElement>>
    }
}