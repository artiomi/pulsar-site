"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[50737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"window-functions-context",title:"Window Functions Context",sidebar_label:"Window Functions: Context"},r=void 0,l={unversionedId:"window-functions-context",id:"version-2.11.x/window-functions-context",title:"Window Functions Context",description:"Java SDK provides access to a window context object that can be used by a window function. This context object provides a wide variety of information and functionality for Pulsar window functions as below.",source:"@site/versioned_docs/version-2.11.x/window-functions-context.md",sourceDirName:".",slug:"/window-functions-context",permalink:"/docs/2.11.x/window-functions-context",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/window-functions-context.md",tags:[],version:"2.11.x",frontMatter:{id:"window-functions-context",title:"Window Functions Context",sidebar_label:"Window Functions: Context"},sidebar:"docsSidebar",previous:{title:"CLI and YAML configs",permalink:"/docs/2.11.x/functions-cli"},next:{title:"Overview",permalink:"/docs/2.11.x/io-overview"}},u={},s=[{value:"Spec",id:"spec",level:2},{value:"Get input topics",id:"get-input-topics",level:3},{value:"Get output topic",id:"get-output-topic",level:3},{value:"Get tenant",id:"get-tenant",level:3},{value:"Get namespace",id:"get-namespace",level:3},{value:"Get function name",id:"get-function-name",level:3},{value:"Get function ID",id:"get-function-id",level:3},{value:"Get function version",id:"get-function-version",level:3},{value:"Get instance ID",id:"get-instance-id",level:3},{value:"Get num instances",id:"get-num-instances",level:3},{value:"Get output schema type",id:"get-output-schema-type",level:3},{value:"Logger",id:"logger",level:2},{value:"Metrics",id:"metrics",level:2},{value:"User config",id:"user-config",level:2},{value:"API",id:"api",level:3},{value:"getUserConfigMap",id:"getuserconfigmap",level:4},{value:"getUserConfigValue",id:"getuserconfigvalue",level:4},{value:"getUserConfigValueOrDefault",id:"getuserconfigvalueordefault",level:4},{value:"Routing",id:"routing",level:2},{value:"State storage",id:"state-storage",level:2},{value:"incrCounter",id:"incrcounter",level:4},{value:"getCounter",id:"getcounter",level:4},{value:"putState",id:"putstate",level:4}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Java SDK provides access to a ",(0,i.kt)("strong",{parentName:"p"},"window context object")," that can be used by a window function. This context object provides a wide variety of information and functionality for Pulsar window functions as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#spec"},"Spec")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Names of all input topics and the output topic associated with the function."),(0,i.kt)("li",{parentName:"ul"},"Tenant and namespace associated with the function."),(0,i.kt)("li",{parentName:"ul"},"Pulsar window function name, ID, and version."),(0,i.kt)("li",{parentName:"ul"},"ID of the Pulsar function instance running the window function."),(0,i.kt)("li",{parentName:"ul"},"Number of instances that invoke the window function."),(0,i.kt)("li",{parentName:"ul"},"Built-in type or custom class name of the output schema."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#logger"},"Logger")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Logger object used by the window function, which can be used to create window function log messages."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#user-config"},"User config")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Access to arbitrary user configuration values."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#routing"},"Routing")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Routing is supported in Pulsar window functions. Pulsar window functions send messages to arbitrary topics as per the ",(0,i.kt)("inlineCode",{parentName:"li"},"publish")," interface."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#metrics"},"Metrics")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Interface for recording metrics."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#state-storage"},"State storage")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Interface for storing and retrieving state in ",(0,i.kt)("a",{parentName:"li",href:"#state-storage"},"state storage"),".")))),(0,i.kt)("h2",{id:"spec"},"Spec"),(0,i.kt)("p",null,"Spec contains the basic information of a function."),(0,i.kt)("h3",{id:"get-input-topics"},"Get input topics"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getInputTopics")," method gets the ",(0,i.kt)("strong",{parentName:"p"},"name list")," of all input topics."),(0,i.kt)("p",null,"This example demonstrates how to get the name list of all input topics in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetInputTopicsWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        Collection<String> inputTopics = context.getInputTopics();\n        System.out.println(inputTopics);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-output-topic"},"Get output topic"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getOutputTopic")," method gets the ",(0,i.kt)("strong",{parentName:"p"},"name of a topic")," to which the message is sent."),(0,i.kt)("p",null,"This example demonstrates how to get the name of an output topic in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetOutputTopicWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String outputTopic = context.getOutputTopic();\n        System.out.println(outputTopic);\n\n        return null;\n    }\n}\n")),(0,i.kt)("h3",{id:"get-tenant"},"Get tenant"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getTenant")," method gets the tenant name associated with the window function."),(0,i.kt)("p",null,"This example demonstrates how to get the tenant name in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetTenantWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String tenant = context.getTenant();\n        System.out.println(tenant);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-namespace"},"Get namespace"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getNamespace")," method gets the namespace associated with the window function."),(0,i.kt)("p",null,"This example demonstrates how to get the namespace in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetNamespaceWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String ns = context.getNamespace();\n        System.out.println(ns);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-function-name"},"Get function name"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getFunctionName")," method gets the window function name."),(0,i.kt)("p",null,"This example demonstrates how to get the function name in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetNameOfWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionName = context.getFunctionName();\n        System.out.println(functionName);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-function-id"},"Get function ID"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getFunctionId")," method gets the window function ID."),(0,i.kt)("p",null,"This example demonstrates how to get the function ID in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetFunctionIDWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionID = context.getFunctionId();\n        System.out.println(functionID);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-function-version"},"Get function version"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getFunctionVersion")," method gets the window function version."),(0,i.kt)("p",null,"This example demonstrates how to get the function version of a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetVersionOfWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionVersion = context.getFunctionVersion();\n        System.out.println(functionVersion);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-instance-id"},"Get instance ID"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getInstanceId")," method gets the instance ID of a window function."),(0,i.kt)("p",null,"This example demonstrates how to get the instance ID in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetInstanceIDWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        int instanceId = context.getInstanceId();\n        System.out.println(instanceId);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-num-instances"},"Get num instances"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getNumInstances")," method gets the number of instances that invoke the window function."),(0,i.kt)("p",null,"This example demonstrates how to get the number of instances in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetNumInstancesWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        int numInstances = context.getNumInstances();\n        System.out.println(numInstances);\n\n        return null;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"get-output-schema-type"},"Get output schema type"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getOutputSchemaType")," method gets the built-in type or custom class name of the output schema."),(0,i.kt)("p",null,"This example demonstrates how to get the output schema type of a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class GetOutputSchemaTypeWindowFunction implements WindowFunction<String, Void> {\n\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String schemaType = context.getOutputSchemaType();\n        System.out.println(schemaType);\n\n        return null;\n    }\n}\n")),(0,i.kt)("h2",{id:"logger"},"Logger"),(0,i.kt)("p",null,"Pulsar window functions using Java SDK have access to an ",(0,i.kt)("a",{parentName:"p",href:"https://www.slf4j.org/"},"SLF4j")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.slf4j.org/api/org/apache/log4j/Logger.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Logger"))," object that can be used to produce logs at the chosen log level."),(0,i.kt)("p",null,"This example logs either a ",(0,i.kt)("inlineCode",{parentName:"p"},"WARNING"),"-level or ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log based on whether the incoming string contains the word ",(0,i.kt)("inlineCode",{parentName:"p"},"danger")," or not in a Java function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Collection;\nimport org.apache.pulsar.functions.api.Record;\nimport org.apache.pulsar.functions.api.WindowContext;\nimport org.apache.pulsar.functions.api.WindowFunction;\nimport org.slf4j.Logger;\n\npublic class LoggingWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        Logger log = context.getLogger();\n        for (Record<String> record : inputs) {\n            log.info(record + "-window-log");\n        }\n        return null;\n    }\n\n}\n')),(0,i.kt)("p",null,"If you need your function to produce logs, specify a log topic when creating or running the function. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --jar my-functions.jar \\\n  --classname my.package.LoggingFunction \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n")),(0,i.kt)("p",null,"You can access all logs produced by ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggingFunction")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"persistent://public/default/logging-function-logs")," topic."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Pulsar window functions can publish arbitrary metrics to the metrics interface which can be queried. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a Pulsar window function uses the language-native interface for Java, that function is not able to publish metrics and stats to Pulsar.")),(0,i.kt)("p",null,"You can record metrics using the context object on a per-key basis. "),(0,i.kt)("p",null,"This example sets a metric for the ",(0,i.kt)("inlineCode",{parentName:"p"},"process-count")," key and a different metric for the ",(0,i.kt)("inlineCode",{parentName:"p"},"elevens-count")," key every time the function processes a message in a Java function. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Collection;\nimport org.apache.pulsar.functions.api.Record;\nimport org.apache.pulsar.functions.api.WindowContext;\nimport org.apache.pulsar.functions.api.WindowFunction;\n\n\n/**\n * Example function that wants to keep track of\n * the event time of each message sent.\n */\npublic class UserMetricWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n\n        for (Record<String> record : inputs) {\n            if (record.getEventTime().isPresent()) {\n                context.recordMetric("MessageEventTime", record.getEventTime().get().doubleValue());\n            }\n        }\n\n        return null;\n    }\n}\n')),(0,i.kt)("h2",{id:"user-config"},"User config"),(0,i.kt)("p",null,"When you run or update Pulsar Functions that are created using SDK, you can pass arbitrary key/value pairs to them with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--user-config")," flag. Key/value pairs ",(0,i.kt)("strong",{parentName:"p"},"must")," be specified as JSON. "),(0,i.kt)("p",null,"This example passes a user-configured key/value to a function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  --name word-filter \\\n --user-config \'{"forbidden-word":"rosebud"}\' \\\n  # Other function configs\n')),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("p",null,"You can use the following APIs to get user-defined information for window functions."),(0,i.kt)("h4",{id:"getuserconfigmap"},"getUserConfigMap"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getUserConfigMap")," API gets a map of all user-defined key/value configurations for the window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n     * Get a map of all user-defined key/value configs for the function.\n     *\n     * @return The full map of user-defined config values\n     */\n    Map<String, Object> getUserConfigMap();\n")),(0,i.kt)("h4",{id:"getuserconfigvalue"},"getUserConfigValue"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserConfigValue")," API gets a user-defined key/value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n     * Get any user-defined key/value.\n     *\n     * @param key The key\n     * @return The Optional value specified by the user for that key.\n     */\n    Optional<Object> getUserConfigValue(String key);\n")),(0,i.kt)("h4",{id:"getuserconfigvalueordefault"},"getUserConfigValueOrDefault"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserConfigValueOrDefault")," API gets a user-defined key/value or a default value if none is present."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n     * Get any user-defined key/value or a default value if none is present.\n     *\n     * @param key\n     * @param defaultValue\n     * @return Either the user config value associated with a given key or a supplied default value\n     */\n    Object getUserConfigValueOrDefault(String key, Object defaultValue);\n")),(0,i.kt)("p",null,"This example demonstrates how to access key/value pairs provided to Pulsar window functions."),(0,i.kt)("p",null,"Java SDK context object enables you to access key/value pairs provided to Pulsar window functions via the command line (as JSON). "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For all key/value pairs passed to Java window functions, both the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),". To set the value to be a different type, you need to deserialize it from the ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," type.")),(0,i.kt)("p",null,"This example passes a key/value pair in a Java window function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n   --user-config \'{"word-of-the-day":"verdure"}\' \\\n  # Other function configs\n')),(0,i.kt)("p",null,"This example accesses values in a Java window function."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"UserConfigFunction")," function logs the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"The word of the day is verdure"')," every time the function is invoked (which means every time a message arrives). The user config of ",(0,i.kt)("inlineCode",{parentName:"p"},"word-of-the-day")," is changed ",(0,i.kt)("strong",{parentName:"p"},"only")," when the function is updated with a new config value via\nmultiple ways, such as the command line tool or REST API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\nimport java.util.Optional;\n\npublic class UserConfigWindowFunction implements WindowFunction<String, String> {\n    @Override\n    public String process(Collection<Record<String>> input, WindowContext context) throws Exception {\n        Optional<Object> whatToWrite = context.getUserConfigValue("WhatToWrite");\n        if (whatToWrite.get() != null) {\n            return (String)whatToWrite.get();\n        } else {\n            return "Not a nice way";\n        }\n    }\n}\n')),(0,i.kt)("p",null,"If no value is provided, you can access the entire user config map or set a default value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Get the whole config map\nMap<String, String> allConfigs = context.getUserConfigMap();\n\n// Get value or resort to default\nString wotd = context.getUserConfigValueOrDefault("word-of-the-day", "perspicacious");\n')),(0,i.kt)("h2",{id:"routing"},"Routing"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"context.publish()")," interface to publish as many results as you want."),(0,i.kt)("p",null,"This example shows that the ",(0,i.kt)("inlineCode",{parentName:"p"},"PublishFunction")," class uses the built-in function in the context to publish messages to the ",(0,i.kt)("inlineCode",{parentName:"p"},"publishTopic")," in a Java function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class PublishWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> input, WindowContext context) throws Exception {\n        String publishTopic = (String) context.getUserConfigValueOrDefault("publish-topic", "publishtopic");\n        String output = String.format("%s!", input);\n        context.publish(publishTopic, output);\n\n        return null;\n    }\n\n}\n')),(0,i.kt)("h2",{id:"state-storage"},"State storage"),(0,i.kt)("p",null,"Pulsar window functions use ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," as a state storage interface. Apache Pulsar installation (including the standalone installation) includes the deployment of BookKeeper bookies."),(0,i.kt)("p",null,"Apache Pulsar integrates with Apache BookKeeper ",(0,i.kt)("inlineCode",{parentName:"p"},"table service")," to store the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," for functions. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"WordCount")," function can store its ",(0,i.kt)("inlineCode",{parentName:"p"},"counters")," state into the BookKeeper table service via Pulsar Functions state APIs."),(0,i.kt)("p",null,"States are key-value pairs, where the key is a string and the value is arbitrary binary data\u2014counters are stored as 64-bit big-endian binary values. Keys are scoped to an individual Pulsar Function and shared between instances of that function."),(0,i.kt)("p",null,"Currently, Pulsar window functions expose Java API to access, update, and manage states. These APIs are available in the context object when you use Java SDK functions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Java API"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"incrCounter")),(0,i.kt)("td",{parentName:"tr",align:null},"Increases a built-in distributed counter referred by key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getCounter")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets the counter value for the key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"putState")),(0,i.kt)("td",{parentName:"tr",align:null},"Updates the state value for the key.")))),(0,i.kt)("p",null,"You can use the following APIs to access, update, and manage states in Java window functions. "),(0,i.kt)("h4",{id:"incrcounter"},"incrCounter"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"incrCounter")," API increases a built-in distributed counter referred by key."),(0,i.kt)("p",null,"Applications use the ",(0,i.kt)("inlineCode",{parentName:"p"},"incrCounter")," API to change the counter of a given ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," by the given ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," does not exist, a new key is created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Increment the built-in distributed counter referred by key\n     * @param key The name of the key\n     * @param amount The amount to be incremented\n     */\n    void incrCounter(String key, long amount);\n")),(0,i.kt)("h4",{id:"getcounter"},"getCounter"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getCounter")," API gets the counter value for the key."),(0,i.kt)("p",null,"Applications uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"getCounter")," API to retrieve the counter of a given ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," changed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"incrCounter")," API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Retrieve the counter value for the key.\n     *\n     * @param key name of the key\n     * @return the amount of the counter value for this key\n     */\n    long getCounter(String key);\n")),(0,i.kt)("p",null,"Except the ",(0,i.kt)("inlineCode",{parentName:"p"},"getCounter")," API, Pulsar also exposes a general key/value API (",(0,i.kt)("inlineCode",{parentName:"p"},"putState"),") for functions to store general key/value state."),(0,i.kt)("h4",{id:"putstate"},"putState"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"putState")," API updates the state value for the key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Update the state value for the key.\n     *\n     * @param key name of the key\n     * @param value state value of the key\n     */\n    void putState(String key, ByteBuffer value);\n")),(0,i.kt)("p",null,"This example demonstrates how applications store states in Pulsar window functions."),(0,i.kt)("p",null,"The logic of the ",(0,i.kt)("inlineCode",{parentName:"p"},"WordCountWindowFunction")," is simple and straightforward."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The function first splits the received string into multiple words using regex ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\."),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For each ",(0,i.kt)("inlineCode",{parentName:"p"},"word"),", the function increments the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"counter")," by 1 via ",(0,i.kt)("inlineCode",{parentName:"p"},"incrCounter(key, amount)"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        for (Record<String> input : inputs) {\n            Arrays.asList(input.getValue().split("\\\\.")).forEach(word -> context.incrCounter(word, 1));\n        }\n        return null;\n\n    }\n}\n')))}d.isMDXComponent=!0}}]);