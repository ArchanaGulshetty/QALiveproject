package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class Accountsuccesspage {
	public Accountsuccesspage()

	{
		PageFactory.initElements(Base.driver, this);// automatically instialize automatically
	}

	@FindBy(linkText = "Success")
	public static WebElement successbreadcrum;

}
