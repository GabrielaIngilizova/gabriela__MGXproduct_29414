Feature: Production Portal - open Templates page via Configuration

  @smoke
  Scenario: Login and open the Templates page
    When I navigate to "https://productionportal.master.mediagenix.io"
    And I enter the "user name"
    And I click on "Proceed" button
    And I enter the "Password"
    And I click on the "Sign in" button
    Then "Production Portal" is open
    When I click on the "Go to configuration page" toolbar button
    And I click "Templates" page
    Then "Templates" page is open
