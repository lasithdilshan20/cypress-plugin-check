const { checkElementCommand } = require('./src/checkElement')
const { softAssertElementCommand } = require('./src/softAssertElement')

// register a new custom command cy.storeValue and cy.retrieveValue
Cypress.Commands.add('checkElement', checkElementCommand('checkElement'))
Cypress.Commands.add('softAssertElement', softAssertElementCommand('softAssertElement'))