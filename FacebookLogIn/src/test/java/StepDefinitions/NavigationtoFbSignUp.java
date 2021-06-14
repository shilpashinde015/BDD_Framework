package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NavigationtoFbSignUp {
	
	public WebDriver driver;



	
@Given("^User has already opened the browser window$")
public void Initial_Setup() {
    // Initiate chrome browser
	//String path = System.getProperty("user.dir");
	System.setProperty("webdriver.gecko.driver","/home/pinky/Downloads/geckodriver");
	FirefoxOptions options = new FirefoxOptions();
	options.addArguments("--disable-notifications");
	
	//Created an object of driver
	driver = new FirefoxDriver(options);
}

@When("^Browser is visible to user$")
public void Open_browser() {
    // Once chrome is launched,make it full screen
	driver.manage().window().maximize();
}

@Then("^Enter the url and press enter$")
public void enter_url(){
    // Enter the url of the website which needs to be navigated
	driver.get("https://www.facebook.com/");
	//Wait for 10 seconds to load the page
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

}

@Then("^Signup page of facebook should appear$")
public void get_pagetitle() {
    // Verify the page title to make sure that we are on correct page
	String title = driver.getTitle();
	System.out.println("title" + title);
	Assert.assertEquals("Facebook - Log In or Sign Up", title);

}

	@Then("^Enter \"([^\"]*)\"\"([^\"]*)\" in SignUpform$")
	public void enter_credential(String emailaddress, String password ) {
    // Enter the data of the user from the table in feature into relevant fields for submission

	driver.findElement(By.xpath("//input[@name ='email']")).clear();
	driver.findElement(By.xpath("//input[@name ='email']")).sendKeys(emailaddress);

	driver.findElement(By.xpath("//input[@name ='pass']")).clear();
	driver.findElement(By.xpath("//input[@name ='pass']")).sendKeys(password);

}

@Then("^I click \"([^\"]*)\"$")
public void button_click(String buttontext) {
    // Click on button having the buttontext

	driver.findElement(By.xpath("//button[contains(text(),buttontext)]")).click();
	
}

@Then("^I should see header \"([^\"]*)\"$")
public void Check_text(String headertext) {
    // Verify that header is present in the page
	try {
		if (driver.findElement(By.xpath("//span[@class='a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7']")).isDisplayed()){
			System.out.println("Test Passed !");
		}
	} finally {
		//Close browser
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.quit();
	}
	
 }

}
	

