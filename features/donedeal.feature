Feature: done deal website

  Scenario Outline: done deal website
    Given I open donedeal website
    Then the homepage is displayed
    When I enter <searchItem> in the search box
    And click on search button
    Then commercial search page should be displayed
    When I select <locationName> from location list
    And price range <minRange> and <maxRange>
    Then result page should be diplayed
    Examples:
      | searchItem | locationName | minRange | maxRange |
      | commercial | Leinster     | 200      | 500      |
# The above scenario explains the actions the user will take to filter results with location
#Here i have used scenario and examples that can be altered to run various tests.
#We can add different data under :| searchItem | locationName | minRange | maxRange |
