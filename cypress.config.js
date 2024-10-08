const { defineConfig } = require("cypress");
const { readFileSync } = require('fs-extra');
const { GenerateCtrfReport } = require('cypress-ctrf-json-reporter')
const path = require('path');

const e2eConfig = {
  pageLoadTimeout: 60000,
  baseUrl: "https://develop.neoroutemee.com/auth/login",
  defaultCommandTimeout: 60000,
  specPattern: ['cypress/e2e/NR/**.spec.js'],
  setupNodeEvents(on, config) {
    // implement node event listeners here
    const jsonPath = process.env.CYPRESS_nr_data_path || 'nr_data.json';
    const text = readFileSync(path.resolve(__dirname, jsonPath), 'utf8');
    const values = JSON.parse(text);
    config.env = {
      ...values,
    };
    new GenerateCtrfReport({
      on,
      outputDir: 'cypress/reports',
      outputFile: 'results.json',
    });
    return config;
  },
};

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  e2e: e2eConfig
});
