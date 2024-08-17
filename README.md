
# SOC - Data-Driven Testing with Cucumber, Gherkin, Java, and Selenium

## Introduction

This project is a comprehensive backend testing suite utilizing Cucumber for Behavior-Driven Development (BDD) with Gherkin syntax, implemented in Java, and Selenium for browser automation. The suite is designed to facilitate robust testing practices and data-driven testing through the use of structured data files.

## Prerequisites

- **Java Development Kit (JDK) 8 or higher**
- **Maven**
- **ChromeDriver (or equivalent WebDriver)**
- **Integrated Development Environment (IDE) such as IntelliJ IDEA or Eclipse**

## Project Structure

```
project-root/
├── SOC_API_TEST_DATA/                    # Directory containing test data files
│   ├── PrinterDownConversation01.xls
│   ├── PrinterDownConversation02.xls
│   ├── ...
│   ├── createIntentPositive.xls
│   └── ...
├── src/
│   ├── main/
│   └── test/
│       ├── java/
│       │   ├── step/                    # Java step definitions
│       │   └── runner/                  # Test runners
│       └── resources/
│           └── feature/                 # Gherkin feature files
├── target/                              # Compiled classes and test results
│   ├── test-classes/
│   │   ├── feature/
│   │   └── step/
│   └── test-results/
│       └── meta-info.json
├── pom.xml                              # Maven project file
└── README.md                            # Project documentation
```

## Setup

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Install Dependencies

```bash
mvn clean install
```

### Configure WebDriver

Ensure the WebDriver (e.g., ChromeDriver) is installed and its path is set in your system's PATH variable.

### Running Tests

To run the tests, use the following Maven command:

```bash
mvn test
```

## Writing Tests

### Feature Files

Feature files are located in `src/test/resources/features`. These files are written in Gherkin syntax, which allows you to describe test scenarios in a natural language format.

Example feature file (`example.feature`):
```gherkin
Feature: Example feature

  Scenario: Example scenario
    Given some precondition
    When some action is performed
    Then some expected result should occur
```

### Step Definitions

Step definitions are located in `src/test/java/step`. These Java classes map Gherkin steps to executable code.

Example step definition (`ExampleStep.java`):
```java
public class ExampleStep {
    @Given("some precondition")
    public void some_precondition() {
        // Implementation here
    }

    @When("some action is performed")
    public void some_action_is_performed() {
        // Implementation here
    }

    @Then("some expected result should occur")
    public void some_expected_result_should_occur() {
        // Implementation here
    }
}
```

### Test Runners

Test runners are located in `src/test/java/runner`. These classes configure and run Cucumber tests.

Example test runner (`TestRunner.java`):
```java
@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features",
    glue = "step",
    plugin = {"pretty", "html:target/cucumber-reports"}
)
public class TestRunner {
}
```

## Data-Driven Testing

This project includes data-driven testing capabilities, allowing tests to be executed with different sets of input data. Test data is stored in Excel files located in the `SOC_API_TEST_DATA` directory.

### Example Data File

An example data file (`createIntentPositive.xls`) might contain:

| IntentName  | Description       | ExpectedResult |
|-------------|-------------------|----------------|
| Intent1     | Description1      | Success        |
| Intent2     | Description2      | Success        |

These data files are read by the test scripts to execute scenarios with various inputs.

## Types of Testing

### Functional Testing

Ensures that the application behaves according to the specified requirements. Functional tests are written in Gherkin syntax and implemented with Cucumber.

### Data-Driven Testing

Executes the same set of test scenarios with different sets of input data to ensure the application handles various data inputs correctly.

### Integration Testing

Verifies the interaction between different components of the application, ensuring they work together as expected.

### Regression Testing

Ensures that new code changes do not negatively impact the existing functionality of the application. Regression tests are automatically executed as part of the continuous integration pipeline.

## Additional Information

- **Maven Surefire Plugin:** The Maven Surefire Plugin is used to configure and run tests.
- **Reporting:** Test reports are generated in the `target/cucumber-reports` directory.
- **Utilities:** Utility classes for context and other helper functions are located in the `utils` package.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
