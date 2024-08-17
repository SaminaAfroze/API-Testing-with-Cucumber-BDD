Feature:GetIntentList verification

  Scenario: Verify intents in the list with id 501
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When user hit the endpoint "intents/"
    Then user should receive status code 200
