# QA Automation Project – Cypress + Cucumber (BDD) + TypeScript

This repository contains an automated testing project created as part of the QA Specialist technical assignment. The purpose of this project is to demonstrate the ability to design test scenarios, apply BDD methodology, and automate user flows using Cypress and TypeScript.

## Project Purpose
The project focuses on two main flows:
1. Logging into the Mediagenix Production Portal and opening the Templates page.
2. Creating a new Template and verifying that it is successfully saved.

## Tools & Technologies
- **Cypress** for end-to-end browser automation
- **Cucumber (Gherkin)** for BDD test scenarios
- **TypeScript** for strongly typed, maintainable test code

## Structure
```
cypress/
 ├─ e2e/
 │   ├─ login-config-templates.feature
 │   ├─ login-config-templates.ts
 │   ├─ create-template-with-name.feature
 │   ├─ create-template-with-name.ts
 │
 ├─ support/
 │    └─ e2e.ts
 │
 cypress.config.ts
 cypress.env.json (credentials - not committed)
 package.json
```

## Installation
1. Install dependencies:
```bash
npm install
```
2. Add your credentials in `cypress.env.json`:
```json
{
  "username": "YOUR_USERNAME",
  "password": "YOUR_PASSWORD"
}
```

## Running Tests
Open the Cypress UI:
```bash
npm run open
```
Run all tests headless:
```bash
npm run run
```

## Included Scenarios
### 1. Login & Open Templates Page
Validates login flow and navigation to the Templates page.

### 2. Create Template
Reuses the login steps and automates creating a new template.

## Reviewer Notes