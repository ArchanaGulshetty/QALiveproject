package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class HeadersSection {

	public HeadersSection() {
		PageFactory.initElements(Base.driver, this);// automatically instialize automatically
	}

	@FindBy(xpath = "//span[.=\"My Account\"]")
	public static WebElement myaacountlink;
	@FindBy(linkText = "Register")
	public static WebElement register;
	@FindBy(linkText = "Login")
	public static WebElement login;
	@FindBy(name = "search")
	public static WebElement searchboxfiled;
	@FindBy(css = "button[class$=\"btn-lg\"]")
	public static WebElement searchbtn;
	@FindBy(xpath = "//span[text()='Shopping Cart']")
	public static WebElement viewCart;

	public static void navigateToLogin() {
		Elements.click(myaacountlink);
		Elements.click(login);
	}

	public static void searchProduct() {
		Elements.TypeText(searchboxfiled, Base.reader.getProduct());
		Elements.click(searchbtn);
	}

	public static void navigateToShoppingCart() {
		Elements.click(viewCart);
	}
}
