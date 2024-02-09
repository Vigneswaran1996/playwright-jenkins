Feature: Bookcart application tests

  Scenario: Login should be success
  
    Given User navigates to the application
    And User click on the login link.
    And User enter the username as "vignesh19"
    And User enter the password as "Vignesh@19"
    When User click on the login button
    Then Login should be success