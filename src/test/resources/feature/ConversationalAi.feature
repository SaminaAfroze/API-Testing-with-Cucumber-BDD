#Feature: GetConversationAiMessage from Endpoint
#
#  @dataFile:SOC_API_TEST_DATA/Cconversation_Ai_message.xls
#  Scenario: ${TestId} -Verify message retrieval from endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the endpoint "conversational-ai?ticket_no=${ticketId}&message=${messageId}"
#    Then  user should receive status code 200
#    And the user should receive the Conversation final_output "${final_output}"
#    And the user should receive the Conversation payload ""
#
#
#  Scenario: ${TestId} -Verify message retrieval from endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When user hit the endpoint "conversational-ai?ticket_no=12&message=Go%2520Get%2520Em%2520Tiger%2520%2528GGET%2529-%2520Montana%2520Ave%252FSanta%2520Monica%2520CA%2520-%2520GGET%2520Montana%2520kitchen%2520closing%2520at%25201pm'"
#    Then  user should receive status code 200
##    And the user should receive the Conversation final_output "${final_output}"
##    And the user should receive the Conversation payload ""
