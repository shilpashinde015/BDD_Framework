Feature: Facebook Account Login

Scenario Outline: Signup for a facebook account from the fb home page

Given User has already opened the browser window
When Browser is visible to user
Then Enter the url and press enter
And Signup page of facebook should appear
Then Enter "<emailaddress>""<password>" in SignUpform
And I click "Log In"
  Examples:
    | emailaddress    | password |
    | *****@gmail.com | ******   |
