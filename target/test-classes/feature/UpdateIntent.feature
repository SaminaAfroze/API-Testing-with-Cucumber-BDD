Feature: Update Intent

  Scenario: updating intent with all fields filled with new data
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
    {
          "RID": "917",
          "Recipe": "https://d3v-cetusdigital.zendesk.com",
          "Intent_Name": "network_alert",
          "Intent_Definition": "network_alert test",
          "Positive_Keywords": "network, alerts",
          "Negative_Keywords": "",
          "Positive_Examples": "",
          "Zendesk_ID": "",
          "Entities": "",
          "Prompt": "",
          "Llm_tshooting": true,
          "Active": true
    }
    """
    When user hit the endpoint "intents/917"
    Then user should receive status code 200

#  Scenario: updating intent without mandatory field
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    And request body
#    """
#    {
#        "RID": "",
#        "Recipe": "https://d3v-cetusdigital.zendesk.com",
#        "Intent_Name": "",
#        "Intent_Definition": "",
#        "Positive_Keywords": "",
#        "Negative_Keywords": "",
#        "Positive_Examples": "",
#        "Zendesk_ID": "",
#        "Entities": "",
#        "Prompt": "",
#        "Llm_tshooting": true,
#        "Active": true
#    }
#    """
#    When user hit the endpoint "intents/"
#    Then user should receive status code 422
