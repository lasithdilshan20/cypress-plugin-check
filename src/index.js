const { checkElementPluginSetupCommand } = require('./checkElement')
const { softAssertElementPluginSetupCommand } = require('./softAssertElement')

const checkElementCommand = (name = 'checkElement') => {
  const checkElement = checkElementCommand(name);
  Cypress.Commands.add(name, checkElement);

}
const softAssertElementCommand = (name = 'softAssertElement') => {
  const softAssertElement = softAssertElementCommand(name);
  Cypress.Commands.add(name, softAssertElement);

}

module.exports = { checkElementPluginSetupCommand, softAssertElementPluginSetupCommand }