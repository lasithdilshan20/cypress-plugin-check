const chalk = require('chalk');
const warningIcon = '⚠️';
const softAssertElementPluginSetupCommand = (name) => (selector) => {
    return cy.get('body', { log: false }).then(($body) => {
        const element = $body.find(selector);
        const found = element.length > 0;

        if (found) {
            return cy.wrap(element, { log: false }).should('exist');
        } else {
            const logMessage = chalk.keyword('orange')(`${warningIcon} Element '${selector}' not present. Warning: Element not found.`);
            Cypress.log({
                name: name,
                message: logMessage,
                displayName: name,
                consoleProps: () => {
                    return {
                        Selector: selector,
                        Status: 'Element not found',
                    };
                },
            });
        }
    });
}

module.exports = { softAssertElementPluginSetupCommand }