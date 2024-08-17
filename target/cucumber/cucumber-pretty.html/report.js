$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/CreateIntent.feature");
formatter.feature({
  "name": "Create Intent",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "creating intent with all fields filled with new data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Create Intent"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\"RID\":\"1001\",\n\"Recipe\":\"26181284766484,26181287161236, 26560938302100\",\n\"Intent_Name\":\"Test toast printer down\",\n\"Intent_Definition\":\"This intent is about any type of printer related issues in restaurants\",\n\"Llm_tshooting\":true,\n\"Positive_Keywords\":\"\",\"Negative_Keywords\":\"\",\n\"Positive_Examples\":\"\",\n\"Prompt\":\"You are an assistant to human customer service agents in a restaurant tech support company called Science on Call. You are never talking to customers directly. \\nYou are assisting the customer service agents in troubleshooting issues with restaurants and help them in resolving the issues. \\nDo not use the person name from the message as it is coming from the customer and not from the agent. \\nAlways check for the issue in the retrieved documentation. \\nYou MUST always start with the first troubleshooting step and do not ask the user about them. \\nYou MUST make sure the model of the device (printer or modem or anyother wifi device) in the question is present in the context.\\nIf not, you MUST say you cannot answer the question.\\nIf the information mentioned in the question like the model of the device is not found in the context, tell the agent you cannot answer the question and ask him to add more information. \\nStart suggesting troubleshooting steps right away and do not generate incomplete troubleshooting steps.\\nWhile generating the response, use the retrieved knowledge base articles based on the current question and past history.\\nBe very concise with the response and only provide the necessary steps required for troubleshooting instead of being verbose\\nThe recommendation MUST come from the context and cannot be hallucinated or cannot be retrieved from any other knowledge you learned during training.\\nYour recommendations MUST NOT repeat. Check {history}.\\nInstead of giving all troubleshooting steps at once. Try one by one. \\nDo not extend the conversation beyond 5-6 questions from the Agent and tell them that you need to escalate to the next level tech support. \\nMake sure you generate complete sentences. If you think the user is getting frustrated with your responses, immediately offer to escalate to the next level tech support. \\nAfter the escalation or if the agent says issue is resolved, generate a summary of the steps you recommended so far.  \\nOnce you summarized the conversation once, do not repeat it. Just say that the issue requires a higher level agent intervention. \\nAlways give the troubleshooting steps as a list. \\nContext from the Retrieved knowledge base articles: {context}\",\n\"Zendesk_ID\":\"171975, 174290, 175208, 172274, 172102, 170819,181228, 184934, 185745, 181228, 180263\",\n\"Active\":true,\n\"Entities\":\"\"}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"intents/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "creating intent with all fields empty",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Create Intent"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n\"Recipe\": \"\",\n\"Intent_Name\": \"\",\n\"Intent_Definition\": \"\",\n\"Positive_Keywords\": \"\",\n\"Negative_Keywords\": \"\",\n\"Positive_Examples\": \"\",\n\"Zendesk_ID\": \"\",\n \"Entities\":\"\"\n \"Prompt\": \"\",\n \"Llm_tshooting\": ,\n \"Active\": true\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"intents/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 422",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "creating intent with only mandatory fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Create Intent"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n\"Recipe\": \"\",\n\"Intent_Name\": \"Intent test mandatory11\",\n\"Intent_Definition\": \"this intent deals with messages related to test111005\",\n\"Positive_Keywords\": \"\",\n\"Negative_Keywords\": \"\",\n\"Positive_Examples\": \"\",\n\"Zendesk_ID\": \"\",\n\"Entities\":\"\",\n\"Prompt\": \"\",\n\"Llm_tshooting\": true,\n\"Active\": false\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"intents/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "creating intent without filling mandatory field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Create Intent"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": " {\n\"Recipe\": \"https://d3v-cetusdigital.zendesk.com/agent/tickets/22\",\n\"Intent_Name\": \"\",\n\"Intent_Definition\": \"this intent deals with messages related to test0011100\",\n\"Positive_Keywords\": \"\",\n\"Negative_Keywords\": \"\",\n\"Positive_Examples\": \"\",\n\"Zendesk_ID\": \"\",\n\"Entities\":\"Entity1,description,Description1\",\n\"Prompt\": \"\",\n\"Llm_tshooting\": true,\n \"Active\":true\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"intents/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 422",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "creating intent with Llm_tshooting false",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Create Intent"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n  \"Recipe\":\"26181284766484,26181287161236, 26560938302100\",\n  \"Intent_Name\":\"test224\",\n  \"Intent_Definition\":\"test0012019\",\n  \"Positive_Keywords\":\"ok59, y59, z56\",\n  \"Negative_Keywords\":\"asd19 asd159\",\n  \"Positive_Examples\":\"this is a positiv9 example54, this is a positiv4 example4,sdfdfs5\",\n  \"Zendesk_ID\":\"171975, 174290, 175208, 172274, 172102, 170819,181228, 184934, 185745, 181228, 180263\",\n  \"Entities\":\"en1,en2,en3\",\n  \"Prompt\": \"\",\n  \"Llm_tshooting\": false,\n   \"Active\":false\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"intents/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 201",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/DeleteIntent.feature");
formatter.feature({
  "name": "DeleteIntent verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify delete intent in the list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DeleteIntent verification"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hit the delete endpoint \"intents/947\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userHitTheDeleteEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify delete intent with already deleted id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:DeleteIntent verification"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hit the delete endpoint \"intents/924\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userHitTheDeleteEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/GetIntentById.feature");
formatter.feature({
  "name": "GetIntentById verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify intents in the list with id 817",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetIntentById verification"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hit the endpoint \"intents/817\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userHitTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify intents in the list with id 502",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetIntentById verification"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hit the endpoint \"intents/502\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userHitTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify intents in the list with id 507",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetIntentById verification"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hit the endpoint \"intents/507\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userHitTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/GetIntentList.feature");
formatter.feature({
  "name": "GetIntentList verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify intents in the list with id 501",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetIntentList verification"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hit the endpoint \"intents/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userHitTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/IntentClassifier.feature");
formatter.feature({
  "name": "GetMessage from Endpoint",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Ticket_21 - Verify message retrieval for ticket 21",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket21.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject : Go Get Em Tiger (GGET)- Montana Ave/Santa Monica CA - GGET Montana kitchen closing at 2pm Description :@U023631H5QC Montana\u0027s kitchen will close today at 2pm. Can you please turn off online food orders at 2pm today? Thank you.\" and parameter \"21\" and parameter \"2024-6-22\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_22 - Verify message retrieval for ticket 22",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket22.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject :Roti SLP close early Description :please shut off online ordering an roti.com today at 6pm. \" and parameter \"22\" and parameter \"2024-5-7\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_23 - Verify message retrieval for ticket 23",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket23.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject :Mooyah burger - Carlsbad Description :stop ordering at the Mooyah Burger Carlsbad at 8pm on 3/1/24. \" and parameter \"23\" and parameter \"2024-6-22\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_24 - Verify message retrieval for ticket 24",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket24.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject :GGeT Row Description :GGeT Row\nIssue: online food orders must turn off from 12:30p-1p (solo kitchen team) and kitchen close at 2pm\" and parameter \"24\" and parameter \"2024-05-07\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_25 - Verify message retrieval for ticket 25",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket25.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject Gregorys Coffee - GC38 Description :Hi Team goodmorning, a few customers have been saying the wifi isn\u0027t working our music is on and th wifi works on my phone. Is there any way you guys  cab check on the wifi and see if there\u0027s anything wrong with it? Thank you in advance for your hel\" and parameter \"25\" and parameter \"2024-05-07\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"network_alert\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_26 - Verify message retrieval for ticket 26",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket26.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject :Roti -West Loop Description :Roti - West Loop that the location would need to be closed/marked as closed on all platforms indefinitely due to an ongoing power outage\" and parameter \"26\" and parameter \"2024-05-02\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[pause_online_ordering]\u003e but was:\u003c[86]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.intentClassifierStep.the_user_should_receive_the_output(intentClassifierStep.java:79)\r\n\tat ✽.the user should receive the output \"pause_online_ordering\"(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/IntentClassifier.feature:59)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Ticket_27 - Verify message retrieval for ticket 27",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket27.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject :GGET Highland Park Description :GGeT Highland Park\nIssue: online food orders must turn off from 12:30p-1p (solo kitchen team) today\" and parameter \"27\" and parameter \"2024-05-01\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_28 - Verify message retrieval for ticket 28",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket28.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject :GGET Wifi down - ROW Description :wifi not working at the GGEt ROW\" and parameter \"28\" and parameter \"2024-05-05\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"network_alert\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_29 - Verify message retrieval for ticket 29",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:GetMessage from Endpoint"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/intent_classifier_message_ticket29.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user requests the message from the endpoint \"intentclassifier\" with parameter \"Subject :GGET Montana Description :GGET Location: Culver City\nRequest: temporary hours for the next couple weeks starting 3/7 will close every day at 4pm. Please keep the opening hours and kitchen hours the same. Thanks!\" and parameter \"29\" and parameter \"2024-04-20\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.intentClassifierStep.a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive a response with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_a_response_with_status_code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should receive the output \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.intentClassifierStep.the_user_should_receive_the_output(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[pause_online_ordering]\u003e but was:\u003c[86]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.intentClassifierStep.the_user_should_receive_the_output(intentClassifierStep.java:79)\r\n\tat ✽.the user should receive the output \"pause_online_ordering\"(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/IntentClassifier.feature:80)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/feature/KitchenClosureAutomation.feature");
formatter.feature({
  "name": "Verify RPA",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "RPA call for valid date with 00 time and present date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify RPA"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n\"ticketId\": \"124\",\n\"systemEntity\": {\n    \"ticketId\": \"124\",\n    \"name\": \"bareburger\",\n    \"location\": \"Long Island City NY 21\",\n    \"intent\": \"pause_online_ordering\",\n    \"action\": \"CLOSE_STORE\",\n    \"attributes\": {\n        \"INTENT\": \"pause_online_ordering\",\n        \"CLOSING_TIME\": \"2024-07-03 00:00:00\",\n        \"REOPEN_TIME\": \"2024-06-20 17:00:00\",\n        \"FULL_PARTIAL_CLOSING\": \"full\",\n        \"ONLINE_ORDERING\": true\n    },\n    \"closingTime\": \"2024-07-03 00:00:00\"\n}\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchenclosure/automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "RPA call for past date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify RPA"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n\"ticketId\": \"124\",\n\"systemEntity\": {\n    \"ticketId\": \"124\",\n    \"name\": \"bareburger\",\n    \"location\": \"Long Island City NY 21\",\n    \"intent\": \"pause_online_ordering\",\n    \"action\": \"CLOSE_STORE\",\n    \"attributes\": {\n        \"INTENT\": \"pause_online_ordering\",\n        \"CLOSING_TIME\": \"2024-06-20 10:00:00\",\n        \"REOPEN_TIME\": \"2024-06-20 17:00:00\",\n        \"FULL_PARTIAL_CLOSING\": \"full\",\n        \"ONLINE_ORDERING\": true\n    },\n    \"closingTime\": \"2024-06-07 01:00:00\"\n}\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchenclosure/automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "RPA call for past date with 00 time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify RPA"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n\"ticketId\": \"125\",\n\"systemEntity\": {\n    \"ticketId\": \"124\",\n    \"name\": \"bareburger\",\n    \"location\": \"Long Island City NY 21\",\n    \"intent\": \"pause_online_ordering\",\n    \"action\": \"CLOSE_STORE\",\n    \"attributes\": {\n        \"INTENT\": \"pause_online_ordering\",\n        \"CLOSING_TIME\": \"2024-06-20 00:00:00\",\n        \"REOPEN_TIME\": \"2024-06-21 17:00:00\",\n        \"FULL_PARTIAL_CLOSING\": \"full\",\n        \"ONLINE_ORDERING\": true\n    },\n    \"closingTime\": \"2024-06-20 00:00:00\"\n}\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchenclosure/automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "RPA call for future date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify RPA"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n\"ticketId\": \"125\",\n\"systemEntity\": {\n    \"ticketId\": \"124\",\n    \"name\": \"bareburger\",\n    \"location\": \"Long Island City NY 21\",\n    \"intent\": \"pause_online_ordering\",\n    \"action\": \"CLOSE_STORE\",\n    \"attributes\": {\n        \"INTENT\": \"pause_online_ordering\",\n        \"CLOSING_TIME\": \"2024-07-30 10:00:00\",\n        \"REOPEN_TIME\": \"2024-07-01 17:00:00\",\n        \"FULL_PARTIAL_CLOSING\": \"full\",\n        \"ONLINE_ORDERING\": true\n    },\n    \"closingTime\": \"2024-07-30 01:00:00\"\n}\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchenclosure/automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/NetworkAlert.feature");
formatter.feature({
  "name": "Verify Network Down Message",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test_1 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation01.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027PA - Chestnut - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 10:11 AM EDT on Oct 12, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n495.meraki.com/PA-Chestnut-appl/n/AljTfaUd/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n495.meraki.com/PA-Chestnut-appl/n/AljTfaUd/manage/configure/alerts\",session_id \"session2001s\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_2 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation02.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027NY - Wall St - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 12:08 AM EDT on May 12, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n495.meraki.com/NY-Wall-St-appli/n/r28X-dUd/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n495.meraki.com/NY-Wall-St-appli/n/r28X-dUd/manage/configure/alerts\",session_id \"session2002\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_3 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation03.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027MD - College Park - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 04:23 AM EDT on Jul  2, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n495.meraki.com/MD-College-Park-/n/IvDnhbUd/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n495.meraki.com/MD-College-Park-/n/IvDnhbUd/manage/configure/alerts\",session_id \"session2003\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_4 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation04.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027VA - Ashburn - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 04:52 AM EDT on Jul  3, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n495.meraki.com/VA-Ashburn-appli/n/03de8bUd/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n495.meraki.com/VA-Ashburn-appli/n/03de8bUd/manage/configure/alerts\",session_id \"session2004\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Failed to send POST request: Software caused connection abort: recv failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat step.SocDBStep.userSendAPostRequestToTheEndpoint(SocDBStep.java:136)\r\n\tat ✽.user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:31)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test_5 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation05.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027Spring Branch - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 03:56 PM CDT on Mar 28, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n114.meraki.com/Spring-Branch-ap/n/XyPa1aYb/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n114.meraki.com/Spring-Branch-ap/n/XyPa1aYb/manage/configure/alerts\",session_id \"session2005\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c499\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.SocDBStep.userShouldReceiveStatusCode(SocDBStep.java:46)\r\n\tat ✽.user should receive status code 200(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:40)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Test_6 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation06.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027VA - Carlyle - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 04:36 PM EST on Nov 14, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n495.meraki.com/VA-Carlyle-appli/n/miTbucUd/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n495.meraki.com/VA-Carlyle-appli/n/miTbucUd/manage/configure/alerts\",session_id \"session2006\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c499\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.SocDBStep.userShouldReceiveStatusCode(SocDBStep.java:46)\r\n\tat ✽.user should receive status code 200(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:48)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Test_7 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation07.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027Georgetown - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 01:22 PM CDT on Jul 13, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n114.meraki.com/Georgetown-appli/n/0M76tbYb/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n114.meraki.com/Georgetown-appli/n/0M76tbYb/manage/configure/alerts\",session_id \"session2007\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c499\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.SocDBStep.userShouldReceiveStatusCode(SocDBStep.java:46)\r\n\tat ✽.user should receive status code 200(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:56)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Test_8 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation08.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027DC - Skyland - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 10:32 AM EDT on Apr  3, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n495.meraki.com/DC-Skyland-appli/n/pxq3GbVh/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n495.meraki.com/DC-Skyland-appli/n/pxq3GbVh/manage/configure/alerts\",session_id \"session2008\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c499\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.SocDBStep.userShouldReceiveStatusCode(SocDBStep.java:46)\r\n\tat ✽.user should receive status code 200(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:64)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Test_9 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation09.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"The security appliance in the \u0027VA - Woodbridge - appliance\u0027 network    failed over to using uplink Internet 2 because the primary link has become unavailable.   It will return to using the primary uplink when it becomes available.  There has been a total of 1 failover event detected: At 08:12 AM EST on Mar  8, the security appliance switched to using  Internet 2 as its uplink.  See the alerting security appliance at https://n495.meraki.com/VA-Woodbridge-ap/n/VFKcpbUd/manage/nodes/show   - Cisco Meraki   This email was automatically generated; please do not reply. You can change your alert delivery settings at https://n495.meraki.com/VA-Woodbridge-ap/n/VFKcpbUd/manage/configure/alerts\",session_id \"session2009\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c502\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.SocDBStep.userShouldReceiveStatusCode(SocDBStep.java:46)\r\n\tat ✽.user should receive status code 200(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:72)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Test_10 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation10.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hey having some wifi issues here at weho was hoping you could help\",session_id \"session2010\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c499\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.SocDBStep.userShouldReceiveStatusCode(SocDBStep.java:46)\r\n\tat ✽.user should receive status code 200(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:80)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Test_11 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation11.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"You have received the following alert generated by UniFi Network  Plant Power - UCSD Alert status -  Alert - Temporary Internet Failover  Device details Device Name: Plant Power - UCSD Time: Dec 31, 2022 at 7:27 AM  Device url: https://unifi.scienceoncall.com:8443/manage\",session_id \"session2011\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c504\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step.SocDBStep.userShouldReceiveStatusCode(SocDBStep.java:46)\r\n\tat ✽.user should receive status code 200(file:///D:/SOC%20Project/soc-data_driven-testing/src/test/resources/feature/NetworkAlert.feature:88)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Test_12 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation12.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hi,  The monitor La Cocinita (lacocinita.hopto.org) is currently DOWN (Host Is Unreachable)  Event timestamp: 2022-05-10 18:19:30 UTC-5  UptimeRobot will alert you when it is back up.   Sincerely,  UptimeRobot UptimeRobot (https://uptimerobot.com) Follow on Twitter (https://twitter.com/uptimerobot) Like on facebook (https://facebook.com/uptimerobot)\",session_id \"session2012\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_13 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation13.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hi,  The monitor Charlie was a sinner. (50.246.163.6) is currently DOWN (Host Is Unreachable)  Event timestamp: 2022-05-08 20:11:00 UTC-5  UptimeRobot will alert you when it is back up.   Sincerely,  UptimeRobot UptimeRobot (https://uptimerobot.com) Follow on Twitter (https://twitter.com/uptimerobot) Like on facebook (https://facebook.com/uptimerobot)\",session_id \"session2013\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_14 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation14.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hello team    My wifi went down I have no internet connection.   Do I restart my own box or is it something you can do ? -- Take care, Nancy .H\",session_id \"session2014\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_15 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation15.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hi,  The monitor Empty Bottle/Pizza Friendly Pizza (ebottle.ignorelist.com) is currently DOWN (Host Is Unreachable)  Event timestamp: 2022-04-29 02:18:01 UTC-5  UptimeRobot will alert you when it is back up.   Sincerely,  UptimeRobot UptimeRobot (https://uptimerobot.com) Follow on Twitter (https://twitter.com/uptimerobot) Like on facebook (https://facebook.com/uptimerobot)\",session_id \"session2015\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_16 - Add Network Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Network Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/NetworkDownConversation16.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Go to monitor \\u2192 (https://uptimerobot.com/dashboard?utm_source\u003dalertMessage\u0026utm_medium\u003demail\u0026utm_campaign\u003ddown-sub-users-pro\u0026utm_content\u003dheaderLink#785751700)\\n\\nGGET - Row is down.\\n\\nHello Science On Call,\\n\\nWe just detected an incident on your monitor. Your service is currently down.\\n\\nWe will alert you when it\u0027s up again.\\n\\nMonitor name\\n\\nGGET - Row\\n\\n-------------------------------\\nChecked URL\\n\\ngget-the-row-rcgkrqbghz.dynamic-m.com\\n\\n-------------------------------\\nRoot cause\\n\\nHost Is Unreachable\\n\\n-------------------------------\\nIncident started at\\n\\n2023-09-28 17:35:55\\n\\n-------------------------------\\n\\nView incident details (https://uptimerobot.com/dashboard?incidentId\u003d349553224\u0026utm_source\u003dalertMessage\u0026utm_medium\u003demail\u0026utm_campaign\u003ddown-sub-users-pro\u0026utm_content\u003dviewIncident#mainDashboard)\\n\\n Comment incident (https://uptimerobot.com/dashboard?incidentId\u003d349553224\u0026utm_source\u003dalertMessage\u0026utm_medium\u003demail\u0026utm_campaign\u003ddown-sub-users-pro\u0026utm_content\u003dcommentIncident#mainDashboard)\\n\\nTIP: Keep your teammates notified!\\n\\nYou can now add your teammates to your account and share your resources and monitors. They will have their login credentials and receive alerts about incidents via email, SMS, or voice call.\\n\\nInvite teammates! (https://uptimerobot.com/team.php?utm_source\u003dalertMessage\u0026utm_medium\u003demail\u0026utm_campaign\u003ddown-sub-usersPaid\u0026utm_content\u003dupsellCTA)\\n\\nThis email was sent by UptimeRobot (https://uptimerobot.com/?utm_source\u003dalertMessage\u0026utm_medium\u003demail\u0026utm_campaign\u003ddown-sub-users-pro\u0026utm_content\u003dfooterLink) . You can update your alert preferences in the dashboard (https://uptimerobot.com/dashboard?utm_source\u003dalertMessage\u0026utm_medium\u003demail\u0026utm_campaign\u003ddown-sub-users-pro\u0026utm_content\u003dfooterSetting) .\",session_id \"session2016s\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/network_alert/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/Normalization.feature");
formatter.feature({
  "name": "Normalization endpoint for editing kitchen closure message",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Ticket_20 - Edit kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Normalization endpoint for editing kitchen closure message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/Normalization_ticket_20.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"NAME: \u0026pizza\\nLOCATION: Charles Village MD\\nINTENT: pause_online_ordering\\nCLOSING_TIME: 2024-03-16 22:00:00\\nREOPEN_TIME: 2024-03-16 00:45:00\\nFULL_PARTIAL_CLOSING: full\\nONLINE_ORDERING: false\\n\" and intent \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.NormalizationStep.message_and_intent(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchen-normalization/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_21 - Edit kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Normalization endpoint for editing kitchen closure message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/Normalization_ticket_21.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Here is the extracted information in JSON format:\\n\\n{\\n\\\"name\\\": \\\"Mooyah Burger\\\",\\n\\\"location\\\": \\\"Carlsbad\\\",\\n\\\"closing_time\\\": \\\"2024-03-01 20:00:00\\\",\\n\\\"reopen_time\\\": null,\\n\\\"full_partial_closing\\\": \\\"full\\\",\\n\\\"online_ordering\\\": null\\n}\\n\\nLet me know if you need any further assistance!\" and intent \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.NormalizationStep.message_and_intent(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchen-normalization/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_22 - Edit kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Normalization endpoint for editing kitchen closure message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/Normalization_ticket_22.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"```json\\n{\\n  \\\"name\\\": \\\"Roti\\\",\\n  \\\"location\\\": \\\"SLP\\\",\\n  \\\"closing_time\\\": \\\"2024-02-29 18:00:00\\\",\\n  \\\"reopen_time\\\": null,\\n  \\\"full_partial_closing\\\": \\\"full\\\",\\n  \\\"online_ordering\\\": true\\n}\\n```\" and intent \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.NormalizationStep.message_and_intent(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchen-normalization/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_23 - Edit kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Normalization endpoint for editing kitchen closure message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/Normalization_ticket_23.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"Here is the extracted information in JSON format:\\n\\n```\\n{\\n  \\\"name\\\": \\\"PLNT Burger\\\",\\n  \\\"location\\\": \\\"DC, Virginia, Boston\\\",\\n  \\\"closing_time\\\": \\\"2024-03-31 18:00:00\\\",\\n  \\\"reopen_time\\\": null,\\n  \\\"full_partial_closing\\\": \\\"full\\\",\\n  \\\"online_ordering\\\": null\\n}\\n```\\n\\nLet me know if this is correct!\" and intent \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.NormalizationStep.message_and_intent(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchen-normalization/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ticket_24 - Edit kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Normalization endpoint for editing kitchen closure message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/Normalization_ticket_24.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message \"```json\\n[\\n{\\n\\\"name\\\": \\\"Beatnic\\\",\\n\\\"location\\\": \\\"Soho\\\",\\n\\\"closing_time\\\": null,\\n\\\"reopen_time\\\": null,\\n\\\"full_partial_closing\\\": null,\\n\\\"online_ordering\\\": \\\"paused\\\"\\n},\\n{\\n\\\"name\\\": \\\"Beatnic\\\",\\n\\\"location\\\": \\\"Seaport\\\",\\n\\\"closing_time\\\": null,\\n\\\"reopen_time\\\": null,\\n\\\"full_partial_closing\\\": null,\\n\\\"online_ordering\\\": \\\"unpaused\\\"\\n}\\n]\\n```\" and intent \"pause_online_ordering\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.NormalizationStep.message_and_intent(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"kitchen-normalization/\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/PauseOnlineOrdering.feature");
formatter.feature({
  "name": "Add Kitchen closure Message",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test_20 - Add kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Add Kitchen closure Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/KitchenClosureTicket20.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "session_id \"session20\",human_input \"GGET Montana GGET Location: Montana Ave/Santa Monica CA Request: @U023631H5QC Montana\u0027s kitchen will close today at 2pm. Can you please turn off online food orders at 2pm today? Thank you.Give me in json\",current_date \"2/20/2024\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.PauseOnlineOrderingStep.session_id_human_input_current_date(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/pause_online_ordering/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_21 - Add kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Add Kitchen closure Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/KitchenClosureTicket21.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "session_id \"sessions22\",human_input \"GGeT closing Montana location Location:Montana Ave, Santa Monica CA Request:GGET Montana kitchen closing at 2pm Description :@U023631H5QC Montana\u0027s kitchen will close today at 2pm. Can you please turn off online food orders at 2pm today? Thank you.give in json\",current_date \"2/28/2024\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.PauseOnlineOrderingStep.session_id_human_input_current_date(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/pause_online_ordering/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_22 - Add kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Add Kitchen closure Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/KitchenClosureTicket22.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "session_id \"sessions23\",human_input \"Roti SLP close earlyLocation:   Request:please shut off online ordering an roti.com today at 6pm. Give me in json\",current_date \"2/28/2024\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.PauseOnlineOrderingStep.session_id_human_input_current_date(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/pause_online_ordering/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_23 - Add kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Add Kitchen closure Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/KitchenClosureTicket23.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "session_id \"session23\",human_input \"Mooyah burger - Carlsbad Location:   Request:stop ordering at the Mooyah Burger Carlsbad at 8pm on 3/1/24. Give me in json\",current_date \"3/1/24\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.PauseOnlineOrderingStep.session_id_human_input_current_date(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/pause_online_ordering/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_24 - Add kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Add Kitchen closure Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/KitchenClosureTicket24.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "session_id \"sessions24\",human_input \"GGeT Row Location:   Request:GGeT Row\nIssue: online food orders must turn off from 12:30p-1p (solo kitchen team) and kitchen close at 2pm. Give me in json\",current_date \"2/28/24\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.PauseOnlineOrderingStep.session_id_human_input_current_date(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/pause_online_ordering/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_25 - Add kitchen closure message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Add Kitchen closure Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/KitchenClosureTicket25.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "session_id \"sessions25\",human_input \"Gregorys Coffee - GC38 Location:   Request:Hi Team goodmorning, a few customers have been saying the wifi isn\u0027t working our music is on and th wifi works on my phone. Is there any way you guys  cab check on the wifi and see if there\u0027s anything wrong with it? Thank you in advance for your hel\",current_date \"${current_date}\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.PauseOnlineOrderingStep.session_id_human_input_current_date(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/pause_online_ordering/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/ToastPrinterDown.feature");
formatter.feature({
  "name": "Verify Printer Down Message",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test_1 - Add Printer Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Printer Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/PrinterDownConversation01.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"SOC team,  I just heard from few shop leaders Pickett and Springfield that it is showing no internet connection and printer not printing anything   Is it everywhere or just these shops?  Thank you!! KAMAL BALANI DISTRICT LEADER, OPERATIONS 571 274 5652   \u0026pizza  🍕٩( ´◡` )( ´◡` )۶🍕\",session_id \"session101\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/toast_printer_down/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_2 - Add Printer Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Printer Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/PrinterDownConversation02.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Yes this is David Nelson at Popeyes on E avenue both of our front terminal printers are not working supposedly we\u0027re going to get two new printers but we have not received anything yet can we please get those sent out to us asap thank you\",session_id \"session102\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/toast_printer_down/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_3 - Add Printer Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Printer Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/PrinterDownConversation03.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Do we have any information on when the new receipt printers will be here for E Avenue I still have two receipt printers that I\u0027m waiting for in my lobby is open I can\u0027t print receipts so I need those receipt printers ASAP\",session_id \"session1003\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/toast_printer_down/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_4 - Add Printer Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Printer Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/PrinterDownConversation04.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"iPad printer not printing out customer orders at Charles Village   Kareem  917-697-4553 --    KAREEM HARRIS       **\u0026pizza**  🍕٩( ´◡` )( ´◡` )۶🍕\",session_id \"session104\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/toast_printer_down/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_5 - Add Printer Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Printer Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/PrinterDownConversation05.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hey were getting a printer error and can’t open the cash drawer   “Could not open connection to printer ‘toast kitchen printer’”\",session_id \"session105\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/toast_printer_down/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_6 - Add Printer Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Printer Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/PrinterDownConversation06.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hey guys, I\u0027m in need of some assistance. My post label printer is not working. I have of course already unplugged everything and plugged it back in. Still not working.  --  TAQUAN HOWIE    \u0026pizza  🍕٩( ´◡` )( ´◡` )۶🍕\",session_id \"session106\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/toast_printer_down/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_7 - Add Printer Down message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Printer Down Message"
    },
    {
      "name": "@dataFile:SOC_API_TEST_DATA/PrinterDownConversation07.xls"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "question \"Hi team,   My shift leader indicated our POS printer is not printing and showing the following error code. Can you please assist?   --  SKY CRUZ SHOP LEADER, JERSEY CITY 929 412 6842‬   \u0026pizza  🍕٩( ´◡` )( ´◡` )۶🍕\",session_id \"session107\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.ToastPrinterDownStep.question_input(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"llm-conversation/toast_printer_down/invoke\"",
  "keyword": "And "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/UpdateIntent.feature");
formatter.feature({
  "name": "Update Intent",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "updating intent with all fields filled with new data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Update Intent"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "{\n      \"RID\": \"917\",\n      \"Recipe\": \"https://d3v-cetusdigital.zendesk.com\",\n      \"Intent_Name\": \"network_alert\",\n      \"Intent_Definition\": \"network_alert test\",\n      \"Positive_Keywords\": \"network, alerts\",\n      \"Negative_Keywords\": \"\",\n      \"Positive_Examples\": \"\",\n      \"Zendesk_ID\": \"\",\n      \"Entities\": \"\",\n      \"Prompt\": \"\",\n      \"Llm_tshooting\": true,\n      \"Active\": true\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hit the endpoint \"intents/917\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userHitTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature/thumbsUpThumbsDown.feature");
formatter.feature({
  "name": "Verify Thumbs up Thumbs Down",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add Thumbs up to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Thumbs up Thumbs Down"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "  {\n  \"ticketId\": \"101\",\n  \"message\": \"hi\",\n  \"feedback\": true\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"log/message\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Thumbs up for the same ticket with different message to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Thumbs up Thumbs Down"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "  {\n  \"ticketId\": \"119\",\n  \"message\": \"can you check my printer?\",\n  \"feedback\": true\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"log/message\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Thumbs down to the endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature:Verify Thumbs up Thumbs Down"
    }
  ]
});
formatter.step({
  "name": "the base URL of the API is \"https://dev-soc-fastapi.azurewebsites.net/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step.intentClassifierStep.the_base_URL_of_the_API_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request body",
  "keyword": "And ",
  "doc_string": {
    "value": "  {\n  \"ticketId\": \"117\",\n  \"message\": \"hi\",\n  \"feedback\": false\n}"
  }
});
formatter.match({
  "location": "step.SocDBStep.requestBody(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send a post request to the endpoint \"log/message\"",
  "keyword": "When "
});
formatter.match({
  "location": "step.SocDBStep.userSendAPostRequestToTheEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "step.SocDBStep.userShouldReceiveStatusCode(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});