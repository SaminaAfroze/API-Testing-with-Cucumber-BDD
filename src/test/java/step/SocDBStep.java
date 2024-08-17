package step;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.stream.JsonReader;
import constants.CONTEXT;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import org.junit.Assert;
import utils.context.TestContext;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class SocDBStep {
    private TestContext testContext;
    private String token = "";

    public SocDBStep(TestContext context) {
        testContext = context;
    }

    public void setAccessToken(String token) {
        this.token = token;
    }

    @When("user hit the endpoint {string}")
    public void userHitTheEndpoint(String path) {
        System.out.println(path);
        Response res = SocRequest.Get(path, token);
        handleResponse(res);
    }

    @When("user hit the endpoint {string} with file {string}")
    public void userHitTheEndpointWithFile(String path, String fileURL) {
        Response response = SocRequest.Post(path, fileURL, token);
        handleResponse(response);
    }

    @Then("user should receive status code {int}")
    public void userShouldReceiveStatusCode(Integer expectedStatusCode) {
        Assert.assertEquals(expectedStatusCode, testContext.scenarioContext.getContext(CONTEXT.RESPONSE_CODE));
    }

    @When("user send a post request to the streaming endpoint {string}")
    public void userSendAPostRequestToTheStreamingEndpoint(String endpoint) {
        try {
            String requestBody = testContext.scenarioContext.getContext(CONTEXT.REQUEST_BODY).toString();

            System.out.println("Sending POST request to: " + endpoint);
            System.out.println("Request Body: " + requestBody);

            HttpURLConnection connection = (HttpURLConnection) new URL(endpoint).openConnection();
            connection.setInstanceFollowRedirects(true); // Follow redirects
            connection.setDoOutput(true);
            connection.setRequestMethod("POST");

            if (endpoint.contains("stream")) {
                // Handle streaming API request
                System.out.println("Sending request to streaming API");
                connection.setRequestProperty("Content-Type", "application/json"); // Set appropriate content type
                connection.connect(); // Establish connection

                OutputStream outputStream = connection.getOutputStream();
                outputStream.write(requestBody.getBytes());
                outputStream.flush();

                int responseCode = connection.getResponseCode();
                System.out.println("Response Code: " + responseCode); // Print out the response code
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    InputStream inputStream = connection.getInputStream();
                    handleStreamingResponse(inputStream);
                } else {
                    InputStream errorStream = connection.getErrorStream();
                    handleErrorResponse(errorStream);
                }
            } else {
                System.out.println("Endpoint is not a streaming API endpoint. Skipping.");
            }
        } catch (Exception e) {
            System.out.println("Error occurred while sending POST request: " + e.getMessage());
            e.printStackTrace(); // Print the stack trace for debugging
            Assert.fail("Failed to send POST request: " + e.getMessage());
        }
    }

    // Method to handle streaming response
    private void handleStreamingResponse(InputStream inputStream) {
        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            while ((line = reader.readLine()) != null) {
                // Handle each line of the streaming response
                System.out.println("Received streaming data: " + line);
            }
            // Close the reader
            reader.close();
        } catch (Exception e) {
            System.out.println("Error occurred while handling streaming response: " + e.getMessage());
            e.printStackTrace(); // Print the stack trace for debugging
            // You might want to throw an exception or handle the error in a different way based on your application's requirements
        }
    }



    // Method to handle error response stream
    private void handleErrorResponse(InputStream errorStream) {
        // Implement your logic to handle error response stream
    }

    @When("user send a post request to the endpoint {string}")
    public void userSendAPostRequestToTheEndpoint(String endpoint) {
        try {
            String requestBody = testContext.scenarioContext.getContext(CONTEXT.REQUEST_BODY).toString();

            System.out.println("Sending POST request to: " + endpoint);
            System.out.println("Request Body: " + requestBody);

            Response res;
            if (token == null || token.isEmpty()) {
                System.out.println("Sending request without token");
                res = SocRequest.Post(endpoint, requestBody);
            } else {
                System.out.println("Sending request with token: " + token);
                res = SocRequest.Post(endpoint, requestBody, token);
            }

            handleNormalResponse(res);
        } catch (Exception e) {
            System.out.println("Error occurred while sending POST request: " + e.getMessage());
            Assert.fail("Failed to send POST request: " + e.getMessage());
        }
    }



    @And("request body")
    public void requestBody(String requestBody) {
        testContext.scenarioContext.setContext(CONTEXT.REQUEST_BODY, requestBody);
    }

    @When("user hit the delete endpoint {string}")
    public void userHitTheDeleteEndpoint(String path) {
        System.out.println(path);
        Response res = SocRequest.Delete(path, token);
        handleResponse(res);
    }

    @When("user send a put request to the endpoint {string}")
    public void userSendAPutRequestToTheEndpoint(String endpoint) {
        Response res;
        if (token == "") {
            System.out.println("Requesting without token");
            res = SocRequest.Put(endpoint, endpoint, testContext.scenarioContext.getContext(CONTEXT.REQUEST_BODY).toString());
        } else {
            System.out.println("Requesting with token: " + token);
            res = SocRequest.Put(endpoint, testContext.scenarioContext.getContext(CONTEXT.REQUEST_BODY).toString(), token);
        }
        handleResponse(res);
    }

    // Method to handle response and set context
    // Method to handle response and set context
    public void handleResponse(Response response) {
        try {
            int statusCode = response.getStatusCode();
            testContext.scenarioContext.setContext(CONTEXT.RESPONSE_CODE, statusCode); // Store status code in test context

            String responseBody = response.getBody().asString();
            System.out.println("Response Body: " + responseBody);

            // Check if the response body is not null or empty
            if (responseBody != null && !responseBody.isEmpty()) {
                // Set JsonReader to lenient mode
                JsonParser jsonParser = new JsonParser();
                JsonReader jsonReader = new JsonReader(new StringReader(responseBody));
                jsonReader.setLenient(true);

                // Parse JSON response
                jsonParser.parse(jsonReader);

                // Add your response handling logic here
            } else {
                System.out.println("Response body is null or empty");
                // Handle this case according to your requirements
            }

        } catch (Exception e) {
            System.out.println("Error occurred while handling response: " + e.getMessage());
            e.printStackTrace(); // Print the stack trace for debugging
            // Handle the exception as per your requirement
        }
    }
    private void handleNormalResponse(Response response) {
        testContext.scenarioContext.setContext(CONTEXT.RESPONSE_CODE, response.statusCode()); // Store as Integer

        String responseBody = response.getBody().asString();
        if(responseBody != null && !responseBody.isEmpty()) {
            testContext.scenarioContext.setContext(CONTEXT.RESPONSE_BODY, responseBody);

            if (response.statusCode() == 200) {
                var ResObj = new JsonParser().parse(responseBody);

                if (ResObj.isJsonObject()) {
                    JsonObject obj = ResObj.getAsJsonObject();
                    testContext.scenarioContext.setContext(CONTEXT.RESPONSE_OBJ, obj.toString());
                }

                if (ResObj.isJsonArray()) {
                    JsonArray arr = ResObj.getAsJsonArray();
                    testContext.scenarioContext.setContext(CONTEXT.RESPONSE_ARRAY, arr.toString());
                    testContext.scenarioContext.setContext(CONTEXT.RESPONSE_ARRAY_LENGTH, String.valueOf(arr.size()));
                }
            }
        } else {
            System.out.println("Response body is null or empty.");
        }
    }


}
