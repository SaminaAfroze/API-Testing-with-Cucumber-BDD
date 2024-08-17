Feature:GetIntentById verification

  Scenario: Verify intents in the list with id 817
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When user hit the endpoint "intents/817"
    Then user should receive status code 200

  Scenario: Verify intents in the list with id 502
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When user hit the endpoint "intents/502"
    Then user should receive status code 200

  Scenario: Verify intents in the list with id 507
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When user hit the endpoint "intents/507"
    Then user should receive status code 200

