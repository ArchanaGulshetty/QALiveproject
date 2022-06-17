package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class SearchResultpage {
	public SearchResultpage() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(linkText = "Samsung SyncMaster 941BW")
	public static WebElement samsangsyncsearchResult;
	@FindBy(css = "input[id=\"button-search\"]+h2+p")
	public static WebElement Noresultsmsg;
	@FindBy(xpath = "//span[text()='Add to Cart'][1]")
	public static WebElement addtocart;

	public static void addFirstProductInCart() {
		Elements.click(addtocart);
	}

}
