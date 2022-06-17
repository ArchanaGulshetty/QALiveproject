package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class OrderSuccessPage {
	public OrderSuccessPage() {
		// TODO Auto-generated constructor stub
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(linkText = "Success")
	public static WebElement Successbreadcrum;
}
