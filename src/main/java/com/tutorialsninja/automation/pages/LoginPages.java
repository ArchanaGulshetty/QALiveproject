package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class LoginPages {
	public LoginPages() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(id = "input-email")
	public static WebElement emailfiled;
	@FindBy(id = "input-password")
	public static WebElement passwordfiled;
	@FindBy(css = "input[type=\"submit\"][value=\"Login\"]")
	public static WebElement Loginbutton;
	@FindBy(css = "div[class$=\"alert-dismissible\"]")
	public static WebElement Waringmessage;
	@FindBy(linkText = "Forgotten Password")
	public static WebElement forgotpassword;

	public static void doLogin(String email, String password) {
		Elements.TypeText(LoginPages.emailfiled, email);
		Elements.TypeText(LoginPages.passwordfiled, password);
		Elements.click(LoginPages.Loginbutton);
	}

	public static void doLogin() {
		Elements.TypeText(emailfiled, Base.reader.getUsername());
		Elements.TypeText(passwordfiled, Base.reader.getPassword());
		Elements.click(Loginbutton);
	}
}
