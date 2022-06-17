package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class ProductDescriptionPage {
	public ProductDescriptionPage() {
		// TODO Auto-generated constructor stub
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(id = "button-cart")
	public static WebElement addproductInCart;

	public static void AddproductTocart() {
		Elements.click(addproductInCart);
	}

}
