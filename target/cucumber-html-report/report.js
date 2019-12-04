$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Straight2Bank.feature");
formatter.feature({
  "line": 1,
  "name": "Straight2Bank",
  "description": "",
  "id": "straight2bank",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 28,
  "name": "verify the column drag and drop, column edit and run the report for editable Operating Account Details report",
  "description": "",
  "id": "straight2bank;verify-the-column-drag-and-drop,-column-edit-and-run-the-report-for-editable-operating-account-details-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Reports_edit_and_run"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Verify user navigates to the S2B Home Screen report and alerts",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Verify user navigates to S2B reports Screen",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "verify the column drag and drop, column edit and run the report for editable Operating Account Details report",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "Reports_edit_and_run_step_def.verify_user_navigates_to_the_S_B_Home_Screen_report_and_alerts(int)"
});
formatter.result({
  "duration": 23055148489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "Reports_edit_and_run_step_def.verify_user_navigates_to_S_B_reports_Screen(int)"
});
formatter.result({
  "duration": 51646724235,
  "status": "passed"
});
formatter.match({
  "location": "Reports_edit_and_run_step_def.verify_the_column_drag_and_drop_column_edit_and_run_the_report_for_editable_Operating_Account_Details_report()"
});
formatter.result({
  "duration": 37973521425,
  "status": "passed"
});
});