package step;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import constants.CONTEXT;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;
import utils.context.TestContext;

public class intentClassifierStep {
    private TestContext testContext;
    private Response response;

    public intentClassifierStep(TestContext context) {
        testContext = context;
    }

    private String baseUrl;

    @Given("the base URL of the API is {string}")
    public void the_base_URL_of_the_API_is(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    private String endpoint;
    private String parameter;

    @Given("the base URL of the APIs {string}")
    public void the_base_URL_of_the_APIs(String baseUrl) {
        this.baseUrl = baseUrl;
        System.out.println("Request URL: " + baseUrl + endpoint + "?message=" + parameter);
    }

    @When("a user requests the message from the endpoint {string} with parameter {string} and parameter {string} and parameter {string}")
    public void a_user_requests_the_message_from_the_endpoint_with_parameter_and_parameter_and_parameter(String endpoint, String message, String ticketid, String ticket_date) {
        this.endpoint = endpoint;
        // Make a request to the specified endpoint with the given parameters
        response = RestAssured.get(baseUrl + endpoint + "?message=" + message + "&ticketid=" + ticketid + "&ticket_date=" + ticket_date);
        // Store the response object in the test context for later use
        testContext.getScenarioContext().setContext(CONTEXT.RESPONSE_OBJ, response.getBody().asString());
    }

    @Then("the user should receive a response with status code {int}")
    public void the_user_should_receive_a_response_with_status_code(Integer expectedStatusCode) {
        // Check if the response object is null
        if (response == null) {
            // Handle the case where the response is null, for example, by failing the test
            Assert.fail("Response object is null. No response received from the API.");
        } else {
            // Assert the status code of the response
            try {
                Assert.assertEquals("Unexpected status code", (int) expectedStatusCode, response.getStatusCode());
            } catch (AssertionError e) {
                // Handle the case where status code assertion fails
                Assert.fail("Expected status code: " + expectedStatusCode + ". Received status code: " + response.getStatusCode());
            }
        }
    }


    @And("the user should receive the output {string}")
    public void the_user_should_receive_the_output(String expectedoutput) {
        // Extract the message from the response object
        String responseBody = testContext.getScenarioContext().getContext(CONTEXT.RESPONSE_OBJ).toString();
        JsonElement jsonElement = JsonParser.parseString(responseBody);

        // Check if the response is a JSON array
        if (jsonElement.isJsonArray()) {
            JsonArray jsonArray = jsonElement.getAsJsonArray();
            // Check if the array is not empty
            Assert.assertTrue(jsonArray.size() > 0);
            String receivedMessage = jsonArray.get(0).getAsString();
            Assert.assertEquals(expectedoutput, receivedMessage);
        } else {
            // If it's not a JSON array, compare directly with the expected message
            Assert.assertEquals(expectedoutput, jsonElement.getAsString().replaceAll("[\\[\\]\"]", ""));
        }
    }

}
