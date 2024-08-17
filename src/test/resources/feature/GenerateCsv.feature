#Feature:Get Csv data verification
#
#  Scenario: Verify for Rid 501
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the endpoint "intents/501/csv"
#    Then user should receive status code 200
#
#  Scenario: Verify for Rid 502
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the endpoint "intents/502/csv"
#    Then user should receive status code 200
#
#  Scenario: Verify for Rid 507
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the endpoint "intents/507/csv"
#    Then user should receive status code 200
#
#  Scenario: Verify for Rid 619
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the endpoint "intents/619/csv"
#    Then user should receive status code 200
#
#  Scenario: Verify for invalid Rid
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the endpoint "intents/1/csv"
#    Then user should receive status code 404
