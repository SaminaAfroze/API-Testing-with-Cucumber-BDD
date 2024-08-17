
Feature: Verify Printer Down Message

  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation01.xls
  Scenario: ${TestId} - Add Printer Down message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When question "${question}",session_id "${session_id}"
    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"

  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation02.xls
  Scenario: ${TestId} - Add Printer Down message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When question "${question}",session_id "${session_id}"
    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"

  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation03.xls
  Scenario: ${TestId} - Add Printer Down message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When question "${question}",session_id "${session_id}"
    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"

  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation04.xls
  Scenario: ${TestId} - Add Printer Down message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When question "${question}",session_id "${session_id}"
    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"

  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation05.xls
  Scenario: ${TestId} - Add Printer Down message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When question "${question}",session_id "${session_id}"
    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"

  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation06.xls
  Scenario: ${TestId} - Add Printer Down message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When question "${question}",session_id "${session_id}"
    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"

  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation07.xls
  Scenario: ${TestId} - Add Printer Down message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When question "${question}",session_id "${session_id}"
    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"
#
#  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation08.xls
#  Scenario: ${TestId} - Add Printer Down message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When question "${question}",session_id "${session_id}"
#    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
#    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"

#  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation09.xls
#  Scenario: ${TestId} - Add Printer Down message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When question "${question}",session_id "${session_id}"
#    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
#    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"


#  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation11.xls
#  Scenario: ${TestId} - Add Printer Down message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When question "${question}",session_id "${session_id}"
#    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
#    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"
#
#  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation12.xls
#  Scenario: ${TestId} - Add Printer Down message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When question "${question}",session_id "${session_id}"
#    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
#    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"
#
#  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation13.xls
#  Scenario: ${TestId} - Add Printer Down message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When question "${question}",session_id "${session_id}"
#    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
#    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"
#
#
#  @dataFile:SOC_API_TEST_DATA/PrinterDownConversation15.xls
#  Scenario: ${TestId} - Add Printer Down message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When question "${question}",session_id "${session_id}"
#    And user send a post request to the endpoint "llm-conversation/toast_printer_down/invoke"
#    Then user should receive status code 200
#    And the user should receive the message with "${printer_down}"