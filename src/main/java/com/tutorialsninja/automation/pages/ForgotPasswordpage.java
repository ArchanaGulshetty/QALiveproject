package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class ForgotPasswordpage {
	public ForgotPasswordpage() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(id = "input-email")
	public static WebElement emailfiled;
	@FindBy(css = "input[type=\"submit\"][value=\"Continue\"]")
	public static WebElement countinuebtn;
}
