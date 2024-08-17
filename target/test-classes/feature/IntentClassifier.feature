Feature: GetMessage from Endpoint

#  @dataFile:SOC_API_TEST_DATA/intent_classifier_message.xls
#  Scenario: ${TestId} - Verify message retrieval from endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When a user requests the message from the endpoint "intentclassifier" with parameter "message=${Id}"
#    Then the user should receive a response with status code 200
#    And the user should receive the message "${message}"


#  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_lunchbox.xls
#  Scenario: ${TestId} - Verify message retrieval for lunch break
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When a user requests the message from the endpoint "intentclassifier" with parameter "message=${Id}"
#    Then the user should receive a response with status code 200
#    And the user should receive the message "${message}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket21.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 21
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket22.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 22
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket23.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 23
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket24.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 24
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"


  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket25.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 25
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket26.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 26
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket27.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 27
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket28.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 28
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"

  @dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket29.xls
  Scenario: ${TestId} - Verify message retrieval for ticket 29
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When a user requests the message from the endpoint "intentclassifier" with parameter "${message}" and parameter "${ticketid}" and parameter "${ticket_date}"
    Then the user should receive a response with status code 200
    And the user should receive the output "${output}"