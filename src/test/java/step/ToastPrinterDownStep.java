package step;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import constants.CONTEXT;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import utils.context.TestContext;

public class ToastPrinterDownStep {

    private TestContext testContext;

    public ToastPrinterDownStep(TestContext context) {
        testContext = context;
    }

    @When("question {string},session_id {string}")
    public void question_input(String question, String sessionId) {
        JsonObject data = new JsonObject();

        // Construct input object
        JsonObject inputObject = new JsonObject();
        inputObject.addProperty("question", question); // Using "question" for input as specified

        // Adding the input object to the data JSON
        data.add("input", inputObject);

        // Construct config object
        JsonObject config = new JsonObject();
        JsonObject configurable = new JsonObject();
        configurable.addProperty("session_id", sessionId); // Setting session_id dynamically
        config.add("configurable", configurable);
        data.add("config", config);

        // Construct kwargs object
        JsonObject kwargs = new JsonObject();
        data.add("kwargs", kwargs);

        // Set the constructed JSON as the request body
        testContext.scenarioContext.setContext(CONTEXT.REQUEST_BODY, data.toString());
    }




    @Then("the user should receive the message with {string}")
    public void the_user_should_receive_the_message_with(String expectedKeyword) {
        Object responseBody = testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        if (responseBody != null && responseBody instanceof String) {
            JsonObject response = JsonParser.parseString((String) responseBody).getAsJsonObject();
            String outputMessage = response.get("output").getAsString();

            // Check if the response message contains the expected keyword
            boolean containsKeyword = outputMessage.contains(expectedKeyword);

            // Assert that the response contains the expected keyword
            Assert.assertTrue("Response message does not contain the expected keyword: " + expectedKeyword, containsKeyword);
        } else {
            Assert.fail("Response body is null or not a string");
        }
    }


}
