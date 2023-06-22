const { checkElementPluginSetupCommand } = require('./checkElement')
const { softAssertElementPluginSetupCommand } = require('./softAssertElement')

const checkElementCommand = (name = 'checkElement') => {
  const check = checkElementCommand(name);
  Cypress.Commands.add(name, check);

}
const softAssertElementCommand = (name = 'softAssertElement') => {
  const softAssert = softAssertElementCommand(name);
  Cypress.Commands.add(name, softAssert);

}

module.exports = { checkElementPluginSetupCommand, softAssertElementPluginSetupCommand }