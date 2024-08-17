package step;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import constants.CONTEXT;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utils.context.TestContext;

import java.util.concurrent.TimeUnit;

public class PrinterDownConversationStreamStep {

    private TestContext testContext;

    public PrinterDownConversationStreamStep(TestContext context) {
        testContext = context;
    }

    @Then("the user should receive message with {string}")
    public void the_user_should_receive_message_with(String expectedMessage) {
        try {
            // Set timeout for waiting for response
            long startTime = System.currentTimeMillis();
            long timeoutMillis = 10000; // Adjust timeout as needed
            boolean messageFound = false;

            // Continue checking for the expected message until timeout
            while (!messageFound && (System.currentTimeMillis() - startTime) < timeoutMillis) {
                // Retrieve the latest chunk of the streaming response from the test context
                Object responseBodyObj = testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
                if (responseBodyObj != null) {
                    String responseBody = responseBodyObj.toString();
                    // Parse the response chunk as JSON
                    String[] lines = responseBody.split("\\n");
                    for (String line : lines) {
                        JsonElement jsonElement = JsonParser.parseString(line);
                        // Process the JSON data to find the expected message
                        if (jsonElement.isJsonObject()) {
                            JsonObject jsonObject = jsonElement.getAsJsonObject();
                            if (jsonObject.has("data")) {
                                String data = jsonObject.get("data").getAsString();
                                if (data.contains(expectedMessage)) {
                                    System.out.println("Expected message found in the response: " + expectedMessage);
                                    messageFound = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                // Wait for a short interval before checking the response again
                TimeUnit.MILLISECONDS.sleep(500);
            }

            // If the expected message is not found within the timeout
            if (!messageFound) {
                Assert.fail("Expected message '" + expectedMessage + "' not found in the response within the timeout");
            }
        } catch (Exception e) {
            System.out.println("Error occurred while checking message in response: " + e.getMessage());
            e.printStackTrace(); // Print the stack trace for debugging
            Assert.fail("Failed to check message in response: " + e.getMessage());
        }
    }
}
