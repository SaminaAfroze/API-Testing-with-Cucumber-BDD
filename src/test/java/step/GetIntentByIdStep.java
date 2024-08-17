package step;

import com.jayway.jsonpath.JsonPath;
import constants.CONTEXT;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utils.context.TestContext;

public class GetIntentByIdStep {

    private final TestContext testContext;

    public GetIntentByIdStep(TestContext context) {
        testContext = context;
    }

    @Then("user should receive Recipe {string}")
    public void user_should_receive_Recipe(String expectedRecipe) {
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        Assert.assertNotNull("Response body is null", responseBody);

        String recipe = JsonPath.parse(responseBody).read("$.Recipe");
        Assert.assertEquals(expectedRecipe, recipe);
    }

    @Then("user should receive Intent_Name {string}")
    public void user_should_receive_Intent_Name(String expectedIntentName) {
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        Assert.assertNotNull("Response body is null", responseBody);

        String intentName = JsonPath.parse(responseBody).read("$.Intent_Name");
        Assert.assertEquals(expectedIntentName, intentName);
    }

    @Then("user should receive Intent_Definition {string}")
    public void user_should_receive_Intent_Definition(String expectedIntentDefinition) {
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        Assert.assertNotNull("Response body is null", responseBody);

        String intentDefinition = JsonPath.parse(responseBody).read("$.Intent_Definition");
        Assert.assertEquals(expectedIntentDefinition, intentDefinition);
    }

    @Then("user should receive Positive_Keywords {string}")
    public void user_should_receive_Positive_Keywords(String expectedPositiveKeywords) {
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        Assert.assertNotNull("Response body is null", responseBody);

        String positiveKeywords = JsonPath.parse(responseBody).read("$.Positive_Keywords");
        Assert.assertEquals(expectedPositiveKeywords, positiveKeywords);
    }

    @Then("user should receive Negative_Keywords {string}")
    public void user_should_receive_Negative_Keywords(String expectedNegativeKeywords) {
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        Assert.assertNotNull("Response body is null", responseBody);

        String negativeKeywords = JsonPath.parse(responseBody).read("$.Negative_Keywords");
        Assert.assertEquals(expectedNegativeKeywords, negativeKeywords);
    }

    @Then("user should receive Zendesk_ID {string}")
    public void user_should_receive_Zendesk_ID(String expectedZendeskId) {
        String responseBody = (String) testContext.scenarioContext.getContext(CONTEXT.RESPONSE_BODY);
        Assert.assertNotNull("Response body is null", responseBody);

        String zendeskId = JsonPath.parse(responseBody).read("$.Zendesk_ID");
        Assert.assertEquals(expectedZendeskId, zendeskId);
    }
}
