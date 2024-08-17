Feature: Verify RPA

  Scenario: RPA call for valid date with 00 time and present date
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
    {
    "ticketId": "124",
    "systemEntity": {
        "ticketId": "124",
        "name": "bareburger",
        "location": "Long Island City NY 21",
        "intent": "pause_online_ordering",
        "action": "CLOSE_STORE",
        "attributes": {
            "INTENT": "pause_online_ordering",
            "CLOSING_TIME": "2024-07-09 00:00:00",
            "REOPEN_TIME": "2024-06-20 17:00:00",
            "FULL_PARTIAL_CLOSING": "full",
            "ONLINE_ORDERING": true
        },
        "closingTime": "2024-07-09 00:00:00"
    }
}
    """
    When user send a post request to the endpoint "kitchenclosure/automation"
    Then user should receive status code 200

  Scenario: RPA call for past date
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
    {
    "ticketId": "124",
    "systemEntity": {
        "ticketId": "124",
        "name": "bareburger",
        "location": "Long Island City NY 21",
        "intent": "pause_online_ordering",
        "action": "CLOSE_STORE",
        "attributes": {
            "INTENT": "pause_online_ordering",
            "CLOSING_TIME": "2024-06-20 10:00:00",
            "REOPEN_TIME": "2024-06-20 17:00:00",
            "FULL_PARTIAL_CLOSING": "full",
            "ONLINE_ORDERING": true
        },
        "closingTime": "2024-06-07 01:00:00"
    }
}
    """
    When user send a post request to the endpoint "kitchenclosure/automation"
    Then user should receive status code 400

  Scenario: RPA call for past date with 00 time
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
    {
    "ticketId": "125",
    "systemEntity": {
        "ticketId": "124",
        "name": "bareburger",
        "location": "Long Island City NY 21",
        "intent": "pause_online_ordering",
        "action": "CLOSE_STORE",
        "attributes": {
            "INTENT": "pause_online_ordering",
            "CLOSING_TIME": "2024-06-20 00:00:00",
            "REOPEN_TIME": "2024-06-21 17:00:00",
            "FULL_PARTIAL_CLOSING": "full",
            "ONLINE_ORDERING": true
        },
        "closingTime": "2024-06-20 00:00:00"
    }
}
    """
    When user send a post request to the endpoint "kitchenclosure/automation"
    Then user should receive status code 200

  Scenario: RPA call for future date
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
    {
    "ticketId": "125",
    "systemEntity": {
        "ticketId": "124",
        "name": "bareburger",
        "location": "Long Island City NY 21",
        "intent": "pause_online_ordering",
        "action": "CLOSE_STORE",
        "attributes": {
            "INTENT": "pause_online_ordering",
            "CLOSING_TIME": "2024-07-30 10:00:00",
            "REOPEN_TIME": "2024-07-01 17:00:00",
            "FULL_PARTIAL_CLOSING": "full",
            "ONLINE_ORDERING": true
        },
        "closingTime": "2024-07-30 01:00:00"
    }
}
    """
    When user send a post request to the endpoint "kitchenclosure/automation"
    Then user should receive status code 200


