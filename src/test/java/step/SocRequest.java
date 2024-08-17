package step;

import constants.CONSTANTS;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class SocRequest {
    public static Response Get(String path, String token) {
        String endPoint = CONSTANTS.SOCBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        Response response = given().header("Authorization", "Bearer " + token).get(endPoint);
        System.out.println();
        System.out.println();

        return response;
    }

    public static Response Post(String path, String body, String token) {
        String endPoint = CONSTANTS.SOCBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        Response response;

        response = RestAssured
                .given()
                .header("Authorization", "Bearer " + token)
                .header("Content-Type", "application/json")
                .body(body)
                .post(endPoint)
                .thenReturn();

        response.prettyPrint();
        return response;
    }

    public static Response Post(String path, String body) {
        String endPoint = CONSTANTS.SOCBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        Response response;

        response = RestAssured
                .given()
                .header("Content-Type", "application/json")
                .body(body)
                .post(endPoint)
                .thenReturn();

        response.prettyPrint();
        return response;
    }

    public static Response Delete(String path, String token) {
        String endPoint = CONSTANTS.SOCBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        Response response = given()
                .header("Authorization", "Bearer " + token)
                .delete(endPoint);
        System.out.println();
        System.out.println();

        return response;
    }

    public static Response Put(String path, String body, String token) {
        String endPoint = CONSTANTS.SOCBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        Response response;

        response = RestAssured
                .given()
                .header("Authorization", "Bearer " + token)
                .header("Content-Type", "application/json")
                .body(body)
                .put(endPoint)
                .thenReturn();

        response.prettyPrint();
        System.out.println(response);
        return response;
    }
    public static Response PostStreaming(String path, String body) {
        String endPoint = CONSTANTS.SOCBaseUrl.concat(path);
        System.out.println("Hitting endpoint " + endPoint);
        System.out.println();

        RequestSpecification request = RestAssured.given()
                .header("Content-Type", "application/json")
                .body(body);

        Response response = request.post(endPoint);

        response.prettyPrint();
        return response;
    }
}




