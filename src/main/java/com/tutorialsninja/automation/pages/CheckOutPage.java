package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class CheckOutPage {
	public CheckOutPage() {
		PageFactory.initElements(Base.driver, this);
	}

	@FindBy(id = "button-payment-address")
	public static WebElement countinuebtnofBillingSession;
	@FindBy(id = "button-shipping-address")
	public static WebElement countinuebtnofDeleriverydetailsSession;
	@FindBy(id = "button-shipping-method")
	public static WebElement countinuebtnofDeliverymethodsession;
	@FindBy(name = "agree")
	public static WebElement Termsandconditioncheckbox;
	@FindBy(id = "button-payment-method")
	public static WebElement paymentmethodofcountinuebtn;
	@FindBy(id = "button-confirm")
	public static WebElement confirmbtn;

	public static void placeAnOrder() {
		Elements.click(countinuebtnofBillingSession);
		Elements.click(countinuebtnofDeleriverydetailsSession);
		Elements.click(countinuebtnofDeliverymethodsession);
		Elements.click(Termsandconditioncheckbox);
		Elements.click(paymentmethodofcountinuebtn);
		Elements.click(confirmbtn);
	}

}
