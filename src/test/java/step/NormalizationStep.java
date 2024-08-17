package step;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import constants.CONTEXT;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utils.context.TestContext;

public class NormalizationStep {

    private TestContext testContext;
    private String message;
    private String intent;

    public NormalizationStep(TestContext context) {
        testContext = context;
    }

    @And("message {string} and intent {string}")
    public void message_and_intent(String message, String intent) {
        this.message = message;
        this.intent = intent;

        // Create a JsonObject to hold the request body
        JsonObject requestBody = new JsonObject();

        // Set the message in the request body
        requestBody.addProperty("message", this.message);
        requestBody.addProperty("intent", this.intent);

        // Set the request body in the test context
        testContext.scenarioContext.setContext(CONTEXT.REQUEST_BODY, requestBody.toString());
    }


    @Then("user should receive NAME {string}")
    public void user_should_receive_NAME(String expectedName) {
        // Retrieve the response body from the context
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);

        // Parse the response body JSON
        JsonObject responseJson = JsonParser.parseString(responseBody).getAsJsonObject();

        // Extract the NAME from the final_output
        JsonObject finalOutput = responseJson.getAsJsonObject("final_output");
        String name = finalOutput.get("NAME").getAsString();

        // Compare the received name with the expectedName
        Assert.assertEquals(expectedName, name);
    }



    @Then("user should receive Location {string}")
    public void user_should_receive_Location(String expectedLocation) {
        // Retrieve the response body from the context
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);

        // Parse the response body JSON
        JsonObject responseJson = JsonParser.parseString(responseBody).getAsJsonObject();

        // Extract the LOCATION from the final_output
        JsonObject finalOutput = responseJson.getAsJsonObject("final_output");
        String location = finalOutput.get("LOCATION").getAsString();

        // Compare the received location with the expectedLocation
        Assert.assertEquals(expectedLocation, location);
    }



    @And("user should receive INTENT_TYPE {string}")
    public void user_should_receive_INTENT_TYPE(String expectedIntentType) {
        // Retrieve the response body from the context
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);

        // Parse the response body JSON
        JsonObject responseJson = JsonParser.parseString(responseBody).getAsJsonObject();

        // Extract the INTENT_TYPE from the response
        JsonObject finalOutput = responseJson.getAsJsonObject("final_output");
        String intentType = finalOutput.get("INTENT_TYPE").getAsString();

        // Compare the INTENT_TYPE with the expectedIntentType
        Assert.assertEquals(expectedIntentType, intentType);
    }

    @And("user should receive ACTION {string}")
    public void user_should_receive_ACTION(String expectedAction) {
        // Retrieve the response body from the context
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);

        // Parse the response body JSON
        JsonObject responseJson = JsonParser.parseString(responseBody).getAsJsonObject();

        // Extract the ACTION from the response
        JsonObject finalOutput = responseJson.getAsJsonObject("final_output");
        String action = finalOutput.get("ACTION").getAsString();

        // Compare the ACTION with the expectedAction
        Assert.assertEquals(expectedAction, action);
    }
}
