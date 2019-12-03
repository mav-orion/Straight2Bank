$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Straight2Bank.feature");
formatter.feature({
  "line": 1,
  "name": "Straight2Bank",
  "description": "",
  "id": "straight2bank",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Verify the tooltip on Hover on Messages",
  "description": "",
  "id": "straight2bank;verify-the-tooltip-on-hover-on-messages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Messages"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Verify user navigates to the S2B Home Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Verify user navigates to S2B Messages Screen",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify user able to filter messages",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify selected message is displayed properly",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify message unread count is reduced from previous count",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "Messages_step_def.verify_user_navigates_to_the_S_B_Home_Screen(int)"
});
formatter.result({
  "duration": 20181717300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "Messages_step_def.verify_user_navigates_to_S_B_Messages_Screen(int)"
});
formatter.result({
  "duration": 67147276470,
  "status": "passed"
});
formatter.match({
  "location": "Messages_step_def.verify_user_able_to_filter_messages()"
});
formatter.result({
  "duration": 20681204455,
  "status": "passed"
});
formatter.match({
  "location": "Messages_step_def.verify_selected_message_is_displayed_properly()"
});
formatter.result({
  "duration": 3161834046,
  "status": "passed"
});
formatter.match({
  "location": "Messages_step_def.verify_message_unread_count_is_reduced_from_previous_count()"
});
formatter.result({
  "duration": 3099069574,
  "status": "passed"
});
});