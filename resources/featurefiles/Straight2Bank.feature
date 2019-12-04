Feature: Straight2Bank 	
@dashbord 
Scenario: Verify if user is able to customize the home screen by drag and drop the widgets 
	Given Verify user navigates to the S2B home 
	When Verify user navigates to S2B home Menu 
	And Verify user navigates to dashbord 
	Then Verify user able to successfully customize the dashbord 
	
@Messages 
Scenario: Verify the tooltip on Hover on Messages 
	Given Verify user navigates to the S2B Home Screen 
	When Verify user navigates to S2B Messages Screen 
	And Verify user able to filter messages
	And Verify selected message is displayed properly
	Then Verify message unread count is reduced from previous count 
@FundTransfer		
Scenario: Verify user can Search the pay From and Payee with a minimum search character of three and Add Invoice 
   
    Given user launch the url and enters on login page
    When user enter valid login credentials
    And user can able to navigate homepage
	And user on home page and able to navigate fundtransfers option
	And user can search with three letters of payee
	And user should add invoice details
	And  user should complete by pressing continue 
	
@Reports_edit_and_run
Scenario: verify the column drag and drop, column edit and run the report for editable Operating Account Details report
	Given Verify user navigates to the S2B Home Screen report and alerts 
	When Verify user navigates to S2B reports Screen	
	Then verify the column drag and drop, column edit and run the report for editable Operating Account Details report 
		

	
@Reports_download 
Scenario: Verify user able to download the Operating Account Statement Report
	Given Verify user navigates to the S2B Home Screen REPORTS & ALERTS 
	When Verify user navigates to S2B REPORTS Screen	
	Then Verify user able to download the Operating Account Statement Report 
		
	
	
    