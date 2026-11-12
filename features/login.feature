Feature: Login

  Scenario: Valid user sees the products page
    Given I am on the saucedemo login page
    When I log in as "standard_user" with password "secret_sauce"
    Then I should see the products page

  Scenario: Wrong password shows an error
    Given I am on the saucedemo login page
    When I log in as "standard_user" with password "wrong_password"
    Then I should see the login error "do not match"