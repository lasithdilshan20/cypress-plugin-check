const {getMainCommandName} = require("./mainCommand");
const chalk = require('chalk');
const warningIcon = '⚠️';
const checkElementCommand = (name) => (selector) => {
    return cy.get('body', { log: false }).then(($body) => {
        const element = $body.find(selector);
        const found = element.length > 0;

        if (found) {
            return cy.wrap(element, { log: false });
        } else {
            const logMessage = `${warningIcon } Element '${selector}' not present. Command '${getMainCommandName()}' skipped.`;
            Cypress.log({
                name: name,
                message: logMessage,
                displayName: name
            });
        }
    });
}

module.exports = { checkElementCommand }