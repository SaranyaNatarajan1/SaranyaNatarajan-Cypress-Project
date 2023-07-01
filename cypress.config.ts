import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://demoqa.com/"
    
  },
  e2e: {
    experimentalRunAllSpecs : true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  
});
