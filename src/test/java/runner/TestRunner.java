package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/feature/",
        glue = "step",
          // plugin = { "com.qmetry.qaf.automation.cucumber.QAFCucumberPlugin", "pretty", "html:target/cucumber/cucumber-pretty.html",
             //   "json:target/cucumber/cucumber.json","junit:target/cucumber/cucumber.xml"}
        plugin = { "pretty", "html:target/cucumber/cucumber-pretty.html", "json:target/cucumber/cucumber.json","junit:target/cucumber/cucumber.xml"}
        )

public class TestRunner {
}
