Feature: Create a new Template

  # Precondition: reuse the same flow you already validated
  Background:
    When I navigate to "https://productionportal.master.mediagenix.io"
    And I enter the "user name"
    And I click on "Proceed" button
    And I enter the "Password"
    And I click on the "Sign in" button
    Then "Production Portal" is open
    When I click on the "Go to configuration page" toolbar button
    And I click "Templates" page
    Then "Templates" page is open

  @smoke
  Scenario: Create a new Template with Template name
    When I click "+ Create Template" button
    Then "New template" page is open
    When I enter "Mandarina" in "Template name" field
    And I Save
    Then the "Template" page is open
    And message "Template created" is shown