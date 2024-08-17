package step;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;
import com.google.gson.stream.JsonReader;
import constants.CONTEXT;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import utils.context.TestContext;

import java.io.StringReader;

public class PauseOnlineOrderingStep {
    private TestContext testContext;

    public PauseOnlineOrderingStep(TestContext context) {
        testContext = context;
    }

    @When("session_id {string},human_input {string},current_date {string}")
    public void session_id_human_input_current_date(String sessionId, String humanInput, String currentDate) {
        JsonObject data = new JsonObject();

        // Format the current date string as required
        String formattedCurrentDateTime = currentDate; // Treat current date as a string

        JsonObject input = new JsonObject();
        input.addProperty("human_input", humanInput);
        input.addProperty("current_date", formattedCurrentDateTime); // Add formatted current date to the input
        data.add("input", input);

        JsonObject config = new JsonObject();
        JsonObject configurable = new JsonObject();
        configurable.addProperty("session_id", sessionId);
        config.add("configurable", configurable);
        data.add("config", config);

        JsonObject kwargs = new JsonObject();
        data.add("kwargs", kwargs); // Keep the kwargs empty as per your example

        // Update scenario context with the constructed JSON request body
        testContext.scenarioContext.setContext(CONTEXT.REQUEST_BODY, data.toString());
    }



    @Then("the user should receive the Name {string}")
    public void the_user_should_receive_the_Name(String expectedName) {
        Object responseBody = testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        if (responseBody != null && responseBody instanceof String) {
            JsonObject response = JsonParser.parseString((String) responseBody).getAsJsonObject();
            JsonObject output = response.getAsJsonObject("output");
            if (output != null) {
                String content = output.get("content").getAsString();
                JsonObject innerJson = extractInnerJson(content);
                if (innerJson != null) {
                    String receivedName = extractFieldValue(innerJson, "name");
                    Assert.assertEquals(expectedName, receivedName);
                } else {
                    Assert.fail("Inner JSON object is null");
                }
            } else {
                Assert.fail("Response body does not contain the expected structure");
            }
        } else {
            Assert.fail("Response body is null or not a string");
        }
    }




    @And("the user should receive the Location {string}")
    public void the_user_should_receive_the_Location(String expectedLocation) {
        Object responseBody = testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        if (responseBody != null && responseBody instanceof String) {
            JsonObject response = JsonParser.parseString((String) responseBody).getAsJsonObject();
            JsonObject output = response.getAsJsonObject("output");
            if (output != null) {
                String content = output.get("content").getAsString();
                JsonObject innerJson = extractInnerJson(content);
                String receivedLocation = extractFieldValue(innerJson, "location").trim();
                // Trim the expected location string to remove extra spaces
                String trimmedExpectedLocation = expectedLocation.trim();
                Assert.assertEquals(trimmedExpectedLocation, receivedLocation);
            } else {
                Assert.fail("Response body does not contain the expected structure");
            }
        } else {
            Assert.fail("Response body is null or not a string");
        }
    }


    @And("the user should receive the Closing time {string}")
    public void the_user_should_receive_the_Closing_time(String expectedClosingTime) {
        // Retrieve the response body from the test context
        Object responseBody = testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);

        // Check if the response body is not null and is a string
        if (responseBody != null && responseBody instanceof String) {
            // Parse the response body as a JSON object
            JsonObject response = JsonParser.parseString((String) responseBody).getAsJsonObject();

            // Extract the 'output' object from the response
            JsonObject output = response.getAsJsonObject("output");

            // Check if the 'output' object is not null
            if (output != null) {
                // Extract the 'content' from the 'output' object
                String content = output.get("content").getAsString();

                // Parse the 'content' as a JSON object
                JsonObject contentJson = JsonParser.parseString(content).getAsJsonObject();

                // Extract the closing time from the content JSON object
                String receivedClosingTime = contentJson.get("closing_time").getAsString();

                // Compare the received closing time with the expected closing time
                Assert.assertEquals(expectedClosingTime, receivedClosingTime);
            } else {
                Assert.fail("Response body does not contain the expected structure");
            }
        } else {
            Assert.fail("Response body is null or not a string");
        }
    }

    @And("the user should receive the Reopen time {string}{string}")
    public void the_user_should_receive_the_Reopen_time(String expectedReopenTime, String expectedStatus) {
        Object responseBody = testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        if (responseBody != null && responseBody instanceof String) {
            JsonObject response = JsonParser.parseString((String) responseBody).getAsJsonObject();
            String receivedReopenTime = extractFieldValue(response, "reopen time");
            Assert.assertEquals(expectedReopenTime, receivedReopenTime);
            // Additional validation for status if needed
        } else {
            Assert.fail("Response body is null or not a string");
        }
    }


    private String extractFieldValue(JsonObject response, String fieldName) {
        String fieldValue = "";
        if (response.has(fieldName)) {
            fieldValue = response.get(fieldName).getAsString();
        }
        return fieldValue;
    }

    private JsonObject extractInnerJson(String content) {
        JsonObject innerJson = null;
        try {
            JsonParser parser = new JsonParser();
            JsonReader reader = new JsonReader(new StringReader(content));
            reader.setLenient(true); // Set reader to lenient mode
            innerJson = parser.parse(reader).getAsJsonObject();
        } catch (JsonSyntaxException e) {
            // Handle JSON syntax exception
            System.err.println("Error parsing inner JSON: " + e.getMessage());
        }
        return innerJson;
    }

}
