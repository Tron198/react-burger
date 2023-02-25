import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
    
    },
    specPattern: "cypress/integration/*.spec.{js,ts,jsx,tsx}",
    baseUrl: "http://localhost:3000/",
  },
});
