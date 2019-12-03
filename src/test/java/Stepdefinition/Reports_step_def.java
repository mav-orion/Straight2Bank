package Stepdefinition;

import Pages.login;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import utils.driverutils;

public class Reports_step_def extends driverutils{
	login log = new login();
	@Given("^Verify user navigates to the S(\\d+)B Home Screen REPORTS & ALERTS$")
	public void verify_user_navigates_to_the_S_B_Home_Screen_REPORTS_ALERTS(int arg1) throws Throwable {
		driver = driverutils.driver();
		login log = new login();
		String login="user000015";
		String group="uatsgee1";
		String password="dummyaaaa";
		log.Home(login, group, password);
	}

	@When("^Verify user navigates to S(\\d+)B REPORTS Screen$")
	public void verify_user_navigates_to_S_B_REPORTS_Screen(int arg1) throws Throwable {
	
	}

}
