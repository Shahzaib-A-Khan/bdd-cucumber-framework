Feature: Login

  @smoke
  Scenario: Valid user sees the products page
    Given I am on the saucedemo login page
    When I log in as "standard_user" with password "secret_sauce"
    Then I should see the products page

  @smoke
  Scenario: Wrong password shows an error
    Given I am on the saucedemo login page
    When I log in as "standard_user" with password "wrong_password"
    Then I should see the login error "do not match"

  @negative
  Scenario Outline: Invalid logins are rejected
    Given I am on the saucedemo login page
    When I log in as "<username>" with password "<password>"
    Then I should see the login error "<message>"

    Examples:
      | username        | password     | message              |
      | locked_out_user | secret_sauce | locked out           |
      | standard_user   |              | Password is required |
      |                 | secret_sauce | Username is required |
      | nobody          | wrong        | do not match         |