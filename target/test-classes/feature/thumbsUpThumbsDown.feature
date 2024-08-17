
Feature: Verify Thumbs up Thumbs Down

  Scenario: Add Thumbs up to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
      {
      "ticketId": "101",
      "message": "hi",
      "feedback": true
    }
    """
    When user send a post request to the endpoint "log/message"
    Then user should receive status code 200

  Scenario: Add Thumbs up for the same ticket with different message to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
      {
      "ticketId": "119",
      "message": "can you check my printer?",
      "feedback": true
    }
    """
    When user send a post request to the endpoint "log/message"
    Then user should receive status code 200

#  Scenario: Add Thumbs up for the bigger message to the endpoint
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    And request body
#    """
#      {
#        "ticketId": "114",
#        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
#         Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Mauris vitae ultricies leo integer.",
#        "feedback": true
#      }
#    """
#    When user send a post request to the endpoint "log/message"
#    Then user should receive status code 200

  Scenario: Add Thumbs down to the endpoint
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
      {
      "ticketId": "117",
      "message": "hi",
      "feedback": false
    }
    """
    When user send a post request to the endpoint "log/message"
    Then user should receive status code 200