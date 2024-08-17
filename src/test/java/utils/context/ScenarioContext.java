package utils.context;

import constants.CONTEXT;

import java.util.HashMap;
import java.util.Map;

public class ScenarioContext {
    private Map<String, Object> scenarioContext;

    public ScenarioContext(){
        scenarioContext = new HashMap<>();
    }

    public String setContext(CONTEXT key, Object value) {
        scenarioContext.put(key.toString(), value);
        return null;
    }

    public Object getContext(CONTEXT key){
        return scenarioContext.get(key.toString());
    }

    public Boolean isContains(CONTEXT key){
        return scenarioContext.containsKey(key.toString());
    }
}
