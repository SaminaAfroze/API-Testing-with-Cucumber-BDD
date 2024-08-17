Feature:DeleteIntent verification

  Scenario: Verify delete intent in the list
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When user hit the delete endpoint "intents/955"
    Then user should receive status code 200

  Scenario: Verify delete intent with already deleted id
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When user hit the delete endpoint "intents/924"
    Then user should receive status code 404

#  Scenario: Verify delete intent with invalid id
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the delete endpoint "Delete/Intents/1"
#    Then user should receive status code 404
#
#  Scenario: Verify delete intent with null id
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the delete endpoint "Delete/Intents/"
#    Then user should receive status code 404