# BDD with Cucumber and Playwright

![BDD Tests](https://github.com/Shahzaib-A-Khan/bdd-cucumber-framework/actions/workflows/bdd-tests.yml/badge.svg)

Behavior-driven tests for saucedemo.com. Scenarios are written in plain English (Gherkin) and run with Cucumber.js, Playwright drives the browser, and TypeScript implements the steps.

## Example
Scenario: Valid user sees the products page
  Given I am on the saucedemo login page
  When I log in as "standard_user" with password "secret_sauce"
  Then I should see the products page

## What it shows
- Gherkin scenarios and a Scenario Outline that runs one scenario against several data rows
- Step definitions with parameters, so one step serves many scenarios
- A custom World and hooks that give every scenario a fresh browser page
- Tags such as @smoke and @negative to run a subset
- An HTML report, with a screenshot attached when a scenario fails
- CI in GitHub Actions on pushes, pull requests and nightly

## Run it
npm ci
npx playwright install chromium
npx cucumber-js
npx cucumber-js --tags "@smoke"

The HTML report is written to reports/cucumber-report.html.

## Notes
- TypeScript is pinned to version 5. ts-node crashes on TypeScript 7, which npm installs by default, so the lock file keeps the version stable.
- The target is saucedemo.com, a public practice site.

## Project structure
- features/: feature files
- features/step_definitions/: the code behind each step
- features/support/: the World and the hooks
- cucumber.js: Cucumber configuration
- .github/workflows/bdd-tests.yml: CI workflow