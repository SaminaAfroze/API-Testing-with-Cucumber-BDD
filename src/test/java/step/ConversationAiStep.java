package step;

import com.google.gson.JsonObject;
import com.jayway.jsonpath.JsonPath;
import constants.CONTEXT;
import org.junit.Assert;
import io.cucumber.java.en.Then;
import utils.context.TestContext;

public class ConversationAiStep {
    private TestContext testContext;
    private JsonObject resObj;

    public ConversationAiStep(TestContext context) {
        testContext = context;
        resObj = (JsonObject) testContext.getScenarioContext().getContext(CONTEXT.RESPONSE_OBJ);
    }

    private String getJsonString(String path) {
        if (resObj != null) {
            return JsonPath.parse(resObj.toString()).read(path).toString();
        } else {
            return null;
        }
    }

    @Then("the user should receive the Conversation final_output {string}")
    public void the_user_should_receive_the_Conversation_final_output(String final_output) {
        Assert.assertEquals(final_output, getJsonString("$.final_output"));
    }
    @Then("the user should receive the Conversation payload {string}")
    public void the_user_should_receive_the_Conversation_payload(String payload) {
        Assert.assertEquals(payload, getJsonString("$.payload"));
    }

}
