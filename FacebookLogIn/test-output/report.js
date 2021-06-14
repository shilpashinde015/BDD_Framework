$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/pinky/Downloads/FacebookSignUp-master/src/main/java/Features/NavigationtoFbSignUp.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Account SignUp",
  "description": "",
  "id": "facebook-account-signup",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Signup for a facebook account from the fb home page",
  "description": "",
  "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page",
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
  "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password"
      ],
      "line": 12,
      "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;;1"
    },
    {
      "cells": [
        "shivaansh.more@gmail.com",
        "Shiva@123"
      ],
      "line": 13,
      "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Signup for a facebook account from the fb home page",
  "description": "",
  "id": "facebook-account-signup;signup-for-a-facebook-account-from-the-fb-home-page;;2",
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
  "name": "Enter \"shivaansh.more@gmail.com\"\"Shiva@123\" in SignUpform",
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
  "location": "NavigationtoFbSignUp.user_has_already_opened_the_browser_window()"
});
formatter.result({
  "duration": 4229490165,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.browser_is_visible_to_user()"
});
formatter.result({
  "duration": 333345453,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.enter_the_url_and_press_enter()"
});
formatter.result({
  "duration": 1259340515,
  "status": "passed"
});
formatter.match({
  "location": "NavigationtoFbSignUp.signup_page_of_facebook_should_appear()"
});
formatter.result({
  "duration": 21272532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivaansh.more@gmail.com",
      "offset": 7
    },
    {
      "val": "Shiva@123",
      "offset": 33
    }
  ],
  "location": "NavigationtoFbSignUp.enter_in_SignUpform(String,String)"
});
formatter.result({
  "duration": 274523537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 9
    }
  ],
  "location": "NavigationtoFbSignUp.i_click(String)"
});
formatter.result({
  "duration": 2737483203,
  "status": "passed"
});
});