package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class test {

    public static WebDriver driver;

    public static void Initial_Setup() {
        // Initiate chrome browser
        //String path = System.getProperty("user.dir");
        System.setProperty("webdriver.gecko.driver","/home/pinky/Downloads/geckodriver");
        FirefoxOptions options = new FirefoxOptions();
        options.addArguments("--disable-notifications");

        //Created an object of driver
        driver = new FirefoxDriver(options);
    }

    public static void Open_browser() {
        // Once chrome is launched,make it full screen
        driver.manage().window().maximize();
    }

    public static void enter_Url(){
        // Enter the url of the website which needs to be navigated
        driver.get("https://www.facebook.com/");
        //Wait for 10 seconds to load the page
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    public static void get_pagetitle() {
        // Verify the page title to make sure that we are on correct page
        String title = driver.getTitle();
        System.out.println("title" + title);
        Assert.assertEquals("Facebook - Log In or Sign Up", title);

    }
    public static void enter_credential( String emailaddress, String password) {
        // Enter the data of the user from the table in feature into relevant fields for submission
        driver.findElement(By.xpath("//input[@name ='email']")).clear();
        driver.findElement(By.xpath("//input[@name ='email']")).sendKeys(emailaddress);

        driver.findElement(By.xpath("//input[@name ='pass']")).clear();
        driver.findElement(By.xpath("//input[@name ='pass']")).sendKeys(password);


    }
    public static void button_click(String buttontext) {
        // Click on button having the buttontext

        driver.findElement(By.xpath("//button[contains(text(),buttontext)]")).click();

    }
    public static void Check_Text() {
        // Verify that header is present in the page
        try {
            if (driver.findElement(By.xpath("//span[@class='a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7']")).isDisplayed()){
                System.out.println("Test Passed !");
            }
           } finally {
            driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
            driver.quit();
        }
    }
        public static void main(String[]args){
            Initial_Setup();
            Open_browser();
            enter_Url();
            get_pagetitle();
            enter_credential("****","****");
            button_click("Log In");
            Check_Text();

        }

    }
