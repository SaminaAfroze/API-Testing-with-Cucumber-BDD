package step;

import com.google.gson.JsonObject;
import constants.CONTEXT;
import io.cucumber.java.en.When;
import utils.context.TestContext;

public class CreateIntentStep {

    private TestContext testContext;

    public CreateIntentStep(TestContext context) {
        testContext = context;
    }
    @When("Recipe {string},Intent_Name {string},Intent_Definition {string},Positive_Keywords {string},Negative_Keywords {string},Positive_Examples {string},Zendesk_ID {string},Entities {string}")
    public void recipe_Intent_Name_Intent_Definition_Positive_Keywords_Negative_Keywords_Positive_Examples_Zendesk_ID_Entities(String recipe, String intentName, String intentDefinition, String positiveKeywords, String negativeKeywords, String positiveExamples, String zendeskId, String entities) {


        JsonObject data = new JsonObject();

        // Set values from the request body
        data.addProperty("Recipe", recipe);
        data.addProperty("Intent_Name", intentName);
        data.addProperty("Intent_Definition", intentDefinition);
        data.addProperty("Positive_Keywords", positiveKeywords);
        data.addProperty("Negative_Keywords", negativeKeywords);
        data.addProperty("Positive_Examples", positiveExamples);
        data.addProperty("Zendesk_ID", zendeskId);
        data.addProperty("Entities", entities);

        // Update scenario context with the constructed JSON request body
        testContext.scenarioContext.setContext(CONTEXT.REQUEST_BODY, data.toString());
    }


}
