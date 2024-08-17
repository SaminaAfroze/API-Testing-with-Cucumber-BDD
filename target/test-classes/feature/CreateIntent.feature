Feature: Create Intent

  Scenario: creating intent with all fields filled with new data
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
  {"RID":"1001",
  "Recipe":"26181284766484,26181287161236, 26560938302100",
  "Intent_Name":"Test toast printer down",
  "Intent_Definition":"This intent is about any type of printer related issues in restaurants",
  "Llm_tshooting":true,
  "Positive_Keywords":"","Negative_Keywords":"",
  "Positive_Examples":"",
  "Prompt":"You are an assistant to human customer service agents in a restaurant tech support company called Science on Call. You are never talking to customers directly. \nYou are assisting the customer service agents in troubleshooting issues with restaurants and help them in resolving the issues. \nDo not use the person name from the message as it is coming from the customer and not from the agent. \nAlways check for the issue in the retrieved documentation. \nYou MUST always start with the first troubleshooting step and do not ask the user about them. \nYou MUST make sure the model of the device (printer or modem or anyother wifi device) in the question is present in the context.\nIf not, you MUST say you cannot answer the question.\nIf the information mentioned in the question like the model of the device is not found in the context, tell the agent you cannot answer the question and ask him to add more information. \nStart suggesting troubleshooting steps right away and do not generate incomplete troubleshooting steps.\nWhile generating the response, use the retrieved knowledge base articles based on the current question and past history.\nBe very concise with the response and only provide the necessary steps required for troubleshooting instead of being verbose\nThe recommendation MUST come from the context and cannot be hallucinated or cannot be retrieved from any other knowledge you learned during training.\nYour recommendations MUST NOT repeat. Check {history}.\nInstead of giving all troubleshooting steps at once. Try one by one. \nDo not extend the conversation beyond 5-6 questions from the Agent and tell them that you need to escalate to the next level tech support. \nMake sure you generate complete sentences. If you think the user is getting frustrated with your responses, immediately offer to escalate to the next level tech support. \nAfter the escalation or if the agent says issue is resolved, generate a summary of the steps you recommended so far.  \nOnce you summarized the conversation once, do not repeat it. Just say that the issue requires a higher level agent intervention. \nAlways give the troubleshooting steps as a list. \nContext from the Retrieved knowledge base articles: {context}",
  "Zendesk_ID":"171975, 174290, 175208, 172274, 172102, 170819,181228, 184934, 185745, 181228, 180263",
  "Active":true,
  "Entities":""}
    """
    When user send a post request to the endpoint "intents/"
    Then user should receive status code 201

  Scenario: creating intent with all fields empty
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
   {
    "Recipe": "",
    "Intent_Name": "",
    "Intent_Definition": "",
    "Positive_Keywords": "",
    "Negative_Keywords": "",
    "Positive_Examples": "",
    "Zendesk_ID": "",
     "Entities":""
     "Prompt": "",
     "Llm_tshooting": ,
     "Active": true
    }
    """
    When user send a post request to the endpoint "intents/"
    Then user should receive status code 422

  Scenario: creating intent with only mandatory fields
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
   {
    "Recipe": "",
    "Intent_Name": "Intent test mandatory11",
    "Intent_Definition": "this intent deals with messages related to test111005",
    "Positive_Keywords": "",
    "Negative_Keywords": "",
    "Positive_Examples": "",
    "Zendesk_ID": "",
    "Entities":"",
    "Prompt": "",
    "Llm_tshooting": true,
    "Active": false
    }
    """
    When user send a post request to the endpoint "intents/"
    Then user should receive status code 201


  Scenario: creating intent without filling mandatory field
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
     {
    "Recipe": "https://d3v-cetusdigital.zendesk.com/agent/tickets/22",
    "Intent_Name": "",
    "Intent_Definition": "this intent deals with messages related to test0011100",
    "Positive_Keywords": "",
    "Negative_Keywords": "",
    "Positive_Examples": "",
    "Zendesk_ID": "",
    "Entities":"Entity1,description,Description1",
    "Prompt": "",
    "Llm_tshooting": true,
     "Active":true
    }
    """
    When user send a post request to the endpoint "intents/"
    Then user should receive status code 422

#  Scenario: creating intent with existing data
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    And request body
#    """
#  {
#      "Recipe":"https://d3v-cetusdigital.zendesk.com/agent/tickets/20",
#      "Intent_Name":"test0011",
#      "Intent_Definition":"test00120",
#      "Positive_Keywords":"ok59, y59, z56",
#      "Negative_Keywords":"asd19 asd159",
#      "Positive_Examples":"this is a positiv9 example54, this is a positiv4 example4,sdfdfs5",
#      "Zendesk_ID":"t12345",
#      "Entities":"en1,en2,en3",
#      "Prompt": "",
#      "Llm_tshooting": true,
#      "Active":true
#    }
#    """
#    When user send a post request to the endpoint "intents/"
#    Then user should receive status code 422

  Scenario: creating intent with Llm_tshooting false
    Given the base URL of the API is "https://dev-soc-fastapi.azurewebsites.net/"
    And request body
    """
  {
      "Recipe":"26181284766484,26181287161236, 26560938302100",
      "Intent_Name":"test224",
      "Intent_Definition":"test0012019",
      "Positive_Keywords":"ok59, y59, z56",
      "Negative_Keywords":"asd19 asd159",
      "Positive_Examples":"this is a positiv9 example54, this is a positiv4 example4,sdfdfs5",
      "Zendesk_ID":"171975, 174290, 175208, 172274, 172102, 170819,181228, 184934, 185745, 181228, 180263",
      "Entities":"en1,en2,en3",
      "Prompt": "",
      "Llm_tshooting": false,
       "Active":false
    }
    """
    When user send a post request to the endpoint "intents/"
    Then user should receive status code 201

#  Scenario: creating intent with Llm_tshooting true
#    Given the base URL of the API is "https://soc-bot-environment.azurewebsites.net/"
#    And request body
#    """
#  {
#      "Recipe":"https://d3v-cetusdigital.zendesk.com/agent/tickets/20",
#      "Intent_Name":"test00120139",
#      "Intent_Definition":"test00120136",
#      "Positive_Keywords":"ok59, y59, z56",
#      "Negative_Keywords":"asd19 asd159",
#      "Positive_Examples":"this is a positiv9 example54, this is a positiv4 example4,sdfdfs5",
#      "Zendesk_ID":"t12345",
#      "Entities":"[{\"restaurant4\":\"GGET495\"},{\"locationname95\":\"GGET3\"}]",
#      "Prompt": "",
#      "Llm_tshooting": true,
#      "Zendesk_TicketURL": "https://d3v-cetusdigital.zendesk.com/agent/tickets/20"
#    }
#    """
#    When user send a post request to the endpoint "intents/"
#    Then user should receive status code 201