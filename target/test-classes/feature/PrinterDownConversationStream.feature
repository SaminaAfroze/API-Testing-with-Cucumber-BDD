
#Feature: Add Printer Down conversation Stream Message
#
#  @dataFile:SOC_API_TEST_DATA/PrinterDownConversationStream.xls
#  Scenario: ${TestId} - Add Printer Down message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When session_id "${session_id}",input "${input}"
#    And user send a post request to the streaming endpoint "printer-down-conversation/stream"
#    Then user should receive status code 200
#    And the user should receive message with "${printer_down}"