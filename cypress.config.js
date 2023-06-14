const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "kf4e1n",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      fixturesFolder: true
    },
  },
});