const { defineConfig } = require("cypress");
const { readFileSync } = require('fs-extra')

const e2eConfig = {
  pageLoadTimeout: 60000,
  baseUrl: "https://develop.neoroutemee.com/auth/login",
  defaultCommandTimeout: 40000,
  specPattern: ['cypress/e2e/NR/**.spec.js'],
  setupNodeEvents(on, config) {
    // implement node event listeners here
    const text = readFileSync('nr_data.json');
    const values = JSON.parse(text);
    config.env = {
      ...values,
    };
    return config;
  },
};

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  e2e: e2eConfig
});
