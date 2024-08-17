
Feature: Add Kitchen closure Message
#
#  @dataFile:SOC_API_TEST_DATA/KitchenClosureBlankSpace.xls
#  Scenario: ${TestId} - Add kitchen closure message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When session_id "${session_id}",human_input "${human_input}",current_date "{current_date}"
#    And user send a post request to the endpoint "kitchen-closure-conversation/invoke"
#    Then user should receive status code 200

  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket20.xls
  Scenario: ${TestId} - Add kitchen closure message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
    And user send a post request to the endpoint "llm-conversation/pause_online_ordering/invoke"
    Then user should receive status code 200
#    And the user should receive the Name "${Name}"
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"

  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket21.xls
  Scenario: ${TestId} - Add kitchen closure message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
    And user send a post request to the endpoint "llm-conversation/pause_online_ordering/invoke"
    Then user should receive status code 200
#    And the user should receive the Name "${Name}"
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"


  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket22.xls
  Scenario: ${TestId} - Add kitchen closure message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
    And user send a post request to the endpoint "llm-conversation/pause_online_ordering/invoke"
    Then user should receive status code 200
#    And the user should receive the Name "${Name}"
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"

  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket23.xls
  Scenario: ${TestId} - Add kitchen closure message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
    And user send a post request to the endpoint "llm-conversation/pause_online_ordering/invoke"
    Then user should receive status code 200
#    And the user should receive the Name "${Name}"
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"
#
  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket24.xls
  Scenario: ${TestId} - Add kitchen closure message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
    And user send a post request to the endpoint "llm-conversation/pause_online_ordering/invoke"
    Then user should receive status code 200
#    And the user should receive the Name "${Name}"
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"
##
  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket25.xls
  Scenario: ${TestId} - Add kitchen closure message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
    And user send a post request to the endpoint "llm-conversation/pause_online_ordering/invoke"
    Then user should receive status code 200
##    And the user should receive the Name "${Name}"
##    And the user should receive the Location "${Location}"
##    And the user should receive the Closing time "${Closing time}"
#
#
#  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket26.xls
#  Scenario: ${TestId} - Add kitchen closure message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
#    And user send a post request to the endpoint "kitchen-closure-conversation/invoke"
#    Then user should receive status code 200
#    And the user should receive the Name "${Name}"
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"
#
#  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket27.xls
#  Scenario: ${TestId} - Add kitchen closure message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
#    And user send a post request to the endpoint "kitchen-closure-conversation/invoke"
#    Then user should receive status code 200
#    And the user should receive the Name "${Name}"
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"
##
##  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket28.xls
##  Scenario: ${TestId} - Add kitchen closure message to the endpoint
##    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
##    When session_id "${session_id}",human_input "${human_input}",current_date "{current_date}"
##    And user send a post request to the endpoint "kitchen-closure-conversation/invoke"
##    Then user should receive status code 200
##    And the user should receive the Name "${Name}"
##    And the user should receive the Location "${Location}"
###    And the user should receive the Closing time "${Closing time}"
#
#  @dataFile:SOC_API_TEST_DATA/KitchenClosureTicket29.xls
#  Scenario: ${TestId} - Add kitchen closure message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    When session_id "${session_id}",human_input "${human_input}",current_date "${current_date}"
#    And user send a post request to the endpoint "kitchen-closure-conversation/invoke"
#    Then user should receive status code 200
#    And the user should receive the Location "${Location}"
#    And the user should receive the Closing time "${closing_time}"