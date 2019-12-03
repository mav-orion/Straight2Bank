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
	
	
	
    