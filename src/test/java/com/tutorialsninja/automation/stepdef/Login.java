package com.tutorialsninja.automation.stepdef;

import org.junit.Assert;

import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.ForgotPasswordpage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.LoginPages;
import com.tutorialsninja.automation.pages.MyAccountPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	HeadersSection session = new HeadersSection();
	LoginPages loginpage = new LoginPages();
	MyAccountPage myaccount = new MyAccountPage();
	ForgotPasswordpage forgotpasswordpage = new ForgotPasswordpage();

	@And("^I naviage to Account Login page$")
	public void i_naviage_to_Account_Login_page() {
		Elements.click(HeadersSection.myaacountlink);
		Elements.click(HeadersSection.login);

	}

	@When("^I login to the application using Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void i_login_to_the_application_using_Username_and_Password(String email, String password) {

		LoginPages.doLogin(email, password);

	}

	@Then("^I should see that the User is able to successfully login$")
	public void i_should_see_that_the_User_is_able_to_successfully_login() {
		Assert.assertTrue(Elements.isDisplayed(MyAccountPage.Registeraffiliateaccount));
	}

	@Then("^I should see an error message informing the User about invalid credentials$")
	public void i_should_see_an_error_message_informing_the_User_about_invalid_credentials() {
		Assert.assertTrue(Elements.isDisplayed(LoginPages.Waringmessage));

	}

	@When("^I reset the forgotten password for \"([^\"]*)\"$")
	public void i_reset_the_forgotten_password_for(String email) {
		Elements.click(LoginPages.forgotpassword);
		Elements.TypeText(ForgotPasswordpage.emailfiled, email);
		Elements.click(ForgotPasswordpage.countinuebtn);

	}

	@Then("^I should see a message informing that the password reset details have been sent to the email address$")
	public void i_should_see_a_message_informing_that_the_password_reset_details_have_been_sent_to_the_email_address() {

		Assert.assertTrue(Elements.VerifyTextEquals(LoginPages.Waringmessage,
				"An email with a confirmation link has been sent your email address."));

	}
}
