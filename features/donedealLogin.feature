Feature: done deal login journey

  Scenario Outline: done deal login journey
    Given I open donedeal website
    Then the homepage is displayed
    When I click on login link from homepage
    Then login popup should be displayed
    When enter email id <emailId>
    And enter password <password>
    And click on login button
    Then I should be logged in successfully
    Examples:
      | emailId               | password   |
      | gauravratra@gmail.com | password12 |
      # for testing different login credentials we need to just add more data under examples.