$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/pinky/Downloads/FacebookSignUp-master/src/main/java/Features/NavigationtoFbSignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Account Login",
  "description": "",
  "id": "facebook-account-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Signup for a facebook account from the fb home page",
  "description": "",
  "id": "facebook-account-login;signup-for-a-facebook-account-from-the-fb-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has already opened the browser window",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser is visible to user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the url and press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Signup page of facebook should appear",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"\u003cemailaddress\u003e\"\"\u003cpassword\u003e\" in SignUpform",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click \"Log In\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "facebook-account-login;signup-for-a-facebook-account-from-the-fb-home-page;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password"
      ],
      "line": 12,
      "id": "facebook-account-login;signup-for-a-facebook-account-from-the-fb-home-page;;1"
    },
    {
      "cells": [
        "*****@gmail.com",
        "******"
      ],
      "line": 13,
      "id": "facebook-account-login;signup-for-a-facebook-account-from-the-fb-home-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Signup for a facebook account from the fb home page",
  "description": "",
  "id": "facebook-account-login;signup-for-a-facebook-account-from-the-fb-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has already opened the browser window",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser is visible to user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the url and press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Signup page of facebook should appear",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"*****@gmail.com\"\"******\" in SignUpform",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click \"Log In\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationtoFbSignUp.Initial_Setup()"
});
formatter.result({
  "duration": 5559113970,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.Open_browser()"
});
formatter.result({
  "duration": 337928088,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.enter_url()"
});
formatter.result({
  "duration": 2101763849,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.get_pagetitle()"
});
formatter.result({
  "duration": 834885512,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027pinky-X510UAR\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-74-generic\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/tmp/rust_mozprofilecLWPx1, moz:geckodriverVersion\u003d0.29.1, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dLINUX, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d89.0, moz:shutdownTimeout\u003d60000, platformVersion\u003d5.4.0-74-generic, moz:processID\u003d35900, browserName\u003dfirefox, moz:buildID\u003d20210527174632, javascriptEnabled\u003dtrue, platformName\u003dLINUX, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: 93e8b6dd-3ff8-4d91-a235-b03f194730b6\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:374)\n\tat StepDefinitions.NavigationtoFbSignUp.get_pagetitle(NavigationtoFbSignUp.java:57)\n\tat ✽.And Signup page of facebook should appear(/home/pinky/Downloads/FacebookSignUp-master/src/main/java/Features/NavigationtoFbSignUp.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "*****@gmail.com",
      "offset": 7
    },
    {
      "val": "******",
      "offset": 24
    }
  ],
  "location": "NavigationtoFbSignUp.enter_credential(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 9
    }
  ],
  "location": "NavigationtoFbSignUp.button_click(String)"
});
formatter.result({
  "status": "skipped"
});
});