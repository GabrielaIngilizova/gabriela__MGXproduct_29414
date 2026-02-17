import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

const getUsername = () => {
  const u = Cypress.env('username');
  expect(u, 'CYPRESS username').to.be.a('string').and.not.be.empty;
  return u as string;
};
const getPassword = () => {
  const p = Cypress.env('password');
  expect(p, 'CYPRESS password').to.be.a('string').and.not.be.empty;
  return p as string;
};

When('I navigate to {string}', (absoluteUrl: string) => {
  cy.visit(absoluteUrl, { timeout: 15000 });
  cy.location('href', { timeout: 15000 }).should((url) => {
    expect(url).to.match(/productionportal/i);
  });
});

When('I enter the {string}', (field: string) => {
  if (/user name/i.test(field)) {
    cy.get('input[name="username"], input#username').first().clear().type(getUsername());
  } else if (/password/i.test(field)) {
    cy.get('input[name="password"], input#password').first().clear().type(getPassword(), { log: false });
  } else {
    throw new Error(`Unknown field label: "${field}"`);
  }
});



When('I click on {string} button', (label: string) => {
  cy.contains('button, [type="submit"], [role="button"]', new RegExp(`^\\s*${label}\\s*$`, 'i'), { timeout: 15000 }).click();
});



When('I click on the {string} button', (label: string) => {
  cy.contains('button, [type="submit"], [role="button"]', new RegExp(`^\\s*${label}\\s*$`, 'i'), { timeout: 15000 }).click();
})


Then('{string} is open', (appName: string) => {
  cy.title().should('match', /Production Portal/i);

});

When('I click on the {string} toolbar button', (label: string) => {
  const keyword = label.match(/\w+/)?.[0] || label;
  cy.get(`[aria-label*="${keyword}" i], [title*="${keyword}" i]`, { timeout: 15000 }).first().click({ force: true });
});

When('I click {string} page', (pageName: string) => {
  cy.contains('a, button, [role="menuitem"]', new RegExp(`^\s*${pageName}\s*$`, 'i'), { timeout: 15000 }).click();

  cy.wait(2000);
});

Then('{string} page is open', (pageName: string) => {

  cy.url({ timeout: 15000 }).should('not.be.empty');
  cy.get('body', { timeout: 15000 }).should('exist');
});
