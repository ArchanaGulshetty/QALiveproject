package com.tutorialsninja.automation.pages;

import java.util.Map;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

import cucumber.api.DataTable;

public class RegisterPage {
	public RegisterPage() {
		PageFactory.initElements(Base.driver, this);// automatically instialize automatically
	}

	@FindBy(id = "input-firstname")
	public static WebElement Firstname;
	@FindBy(id = "input-lastname")
	public static WebElement lastname;
	@FindBy(id = "input-email")
	public static WebElement Email;
	@FindBy(id = "input-password")
	public static WebElement password;
	@FindBy(name = "agree")
	public static WebElement Privacypolicy;
	@FindBy(id = "input-confirm")
	public static WebElement confirmPassword;
	@FindBy(id = "input-telephone")
	public static WebElement telephone;
	@FindBy(css = "input[type=\"submit\"][value=\"Continue\"]")
	public static WebElement countinue;
	@FindBy(linkText = "Register")
	public static WebElement RegisterPageBreadscrum;
	@FindBy(css = "input[id=\"input-firstname\"]+div")
	public static WebElement firstNameWarning;
	@FindBy(css = "input[id=\"input-lastname\"]+div")
	public static WebElement lastNameWarning;
	@FindBy(css = "input[id=\"input-email\"]+div")
	public static WebElement emailWarning;
	@FindBy(css = "input[id=\"input-telephone\"]+div")
	public static WebElement telephoneWarning;
	@FindBy(css = "input[id=\"input-password\"]+div")
	public static WebElement passwordWarning;
	@FindBy(css = "div[class$=\"alert-dismissible\"]")
	public static WebElement mainWarning;
	@FindBy(css = "input[name=\"newsletter\"][value=\"1\"]")
	public static WebElement yesToNewsletter;

	public static void enterAllRegistrationDetails(DataTable dataTable, String detailsType) {

		Map<String, String> map = dataTable.asMap(String.class, String.class);
		Elements.TypeText(RegisterPage.Firstname, map.get("FirstName"));
		Elements.TypeText(RegisterPage.lastname, map.get("LastName"));

		Elements.TypeText(RegisterPage.password, map.get("Password"));
		Elements.TypeText(RegisterPage.telephone, map.get("Telephone"));
		Elements.TypeText(RegisterPage.confirmPassword, map.get("Password"));
		if (detailsType.equalsIgnoreCase("duplicate"))
			Elements.TypeText(RegisterPage.Email, map.get("Email"));

		else
			Elements.TypeText(RegisterPage.Email, System.currentTimeMillis() + map.get("Email"));

	}

}
