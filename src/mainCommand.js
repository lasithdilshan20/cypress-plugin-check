let command;
let currentCommand;
export function getMainCommandName() {
    command = cy.state('current')
    currentCommand = command.attributes.next.attributes.name;
    return currentCommand;
}