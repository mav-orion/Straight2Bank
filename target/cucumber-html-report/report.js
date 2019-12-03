$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Straight2Bank.feature");
formatter.feature({
  "line": 1,
  "name": "Straight2Bank",
  "description": "",
  "id": "straight2bank",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 17,
  "name": "Verify user can Search the pay From and Payee with a minimum search character of three and Add Invoice",
  "description": "",
  "id": "straight2bank;verify-user-can-search-the-pay-from-and-payee-with-a-minimum-search-character-of-three-and-add-invoice",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@FundTransfer"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user launch the url and enters on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enter valid login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user can able to navigate homepage",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user on home page and able to navigate fundtransfers option",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user can search with three letters of payee",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should add invoice details",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user should complete by pressing continue",
  "keyword": "And "
});
formatter.match({
  "location": "Searchpayee_step_def.user_launch_the_url_and_enters_on_login_page()"
});
formatter.result({
  "duration": 7325433120,
  "status": "passed"
});
formatter.match({
  "location": "Searchpayee_step_def.user_enter_valid_login_credentials()"
});
formatter.result({
  "duration": 20809639772,
  "status": "passed"
});
formatter.match({
  "location": "Searchpayee_step_def.user_can_able_to_navigate_homepage()"
});
formatter.result({
  "duration": 37428310302,
  "status": "passed"
});
formatter.match({
  "location": "Searchpayee_step_def.user_on_home_page_and_able_to_navigate_fundtransfers_option()"
});
formatter.result({
  "duration": 4442507846,
  "status": "passed"
});
formatter.match({
  "location": "Searchpayee_step_def.user_can_search_with_three_letters_of_payee()"
});
formatter.result({
  "duration": 7051843670,
  "status": "passed"
});
formatter.match({
  "location": "Searchpayee_step_def.user_should_add_invoice_details()"
});
formatter.result({
  "duration": 9129176683,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027W2012R2-BENCH06\u0027, ip: \u0027192.168.25.73\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.11 (eaaae9de6b8999773fa33f92ce1e1bbe294437cf-refs/branch-heads/3904@{#86}), userDataDir\u003dC:\\Users\\muralim\\AppData\\Local\\Temp\\2\\scoped_dir11476_1557446201}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWIN8_1, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49290}, acceptInsecureCerts\u003dfalse, browserVersion\u003d78.0.3904.108, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWIN8_1, setWindowRect\u003dtrue}]\nSession ID: 38f146a971b5d6db690f6668e867340f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat Pages.searchpayee.invoiceselect(searchpayee.java:260)\r\n\tat Stepdefinition.Searchpayee_step_def.user_should_add_invoice_details(Searchpayee_step_def.java:59)\r\n\tat ✽.And user should add invoice details(Straight2Bank.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Searchpayee_step_def.user_should_complete_by_pressing_continue()"
});
formatter.result({
  "status": "skipped"
});
});