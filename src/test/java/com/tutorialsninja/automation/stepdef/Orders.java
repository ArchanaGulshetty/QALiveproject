package com.tutorialsninja.automation.stepdef;

import org.junit.Assert;

import com.tutorialsninja.automation.framework.Browser;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.framework.Waits;
import com.tutorialsninja.automation.pages.CheckOutPage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.LoginPages;
import com.tutorialsninja.automation.pages.OrderSuccessPage;
import com.tutorialsninja.automation.pages.ProductDescriptionPage;
import com.tutorialsninja.automation.pages.SearchResultpage;
import com.tutorialsninja.automation.pages.ShoppingCartPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Orders {
	HeadersSection session = new HeadersSection();
	LoginPages loginpage = new LoginPages();
	SearchResultpage searchResultpage = new SearchResultpage();
	ShoppingCartPage shoppingCartPage = new ShoppingCartPage();
	CheckOutPage checkOutPage = new CheckOutPage();
	OrderSuccessPage orderSuccessPage = new OrderSuccessPage();
	ProductDescriptionPage productDescriptionPage = new ProductDescriptionPage();

	@Given("^I login to the application$")
	public void i_login_to_the_application() {
		Browser.openapplicationurl();
		HeadersSection.navigateToLogin();
		LoginPages.doLogin();

	}

	@When("^I add any product to Bag and checkout$")
	public void i_add_any_product_to_Bag_and_checkout() {
		HeadersSection.searchProduct();
		SearchResultpage.addFirstProductInCart();
		ProductDescriptionPage.AddproductTocart();
		HeadersSection.navigateToShoppingCart();
		ShoppingCartPage.navigateToCheckoutPage();

	}

	@When("^I place an order$")
	public void i_place_an_order() {
		CheckOutPage.placeAnOrder();

	}

	@Then("^I should see that the order is placed successfully$")
	public void i_should_see_that_the_order_is_placed_successfully() {

		Waits.waitUntilElementLocated(10, OrderSuccessPage.Successbreadcrum);
		Assert.assertTrue(Elements.isDisplayed(OrderSuccessPage.Successbreadcrum));

	}

}
