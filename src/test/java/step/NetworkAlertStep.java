package step;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import constants.CONTEXT;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utils.context.TestContext;

public class NetworkAlertStep {

    private TestContext testContext;

    public NetworkAlertStep(TestContext context) {
        testContext = context;
    }


    @Then("the user should receive the message with {string} or {string} or {string}")
    public void the_user_should_receive_the_message_with_or_or(String keyword1, String keyword2, String keyword3) {
        Object responseBody = testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        if (responseBody != null && responseBody instanceof String) {
            JsonObject response = JsonParser.parseString((String) responseBody).getAsJsonObject();
            String outputMessage = response.get("output").getAsString();

            // Check if the response message contains any of the expected keywords
            boolean containsKeyword1 = outputMessage.contains(keyword1);
            boolean containsKeyword2 = outputMessage.contains(keyword2);
            boolean containsKeyword3 = outputMessage.contains(keyword3);

            // Assert that the response contains any of the expected keywords
            boolean containsAnyKeyword = containsKeyword1 || containsKeyword2 || containsKeyword3;
            Assert.assertTrue("Response message does not contain any of the expected keywords: " + keyword1 + ", " + keyword2 + ", " + keyword3, containsAnyKeyword);
        } else {
            Assert.fail("Response body is null or not a string");
        }
    }

}
