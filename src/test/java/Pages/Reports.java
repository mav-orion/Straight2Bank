package Pages;

import java.time.Duration;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import pageFactory.Messagespom;
import pageFactory.Reportspom;
import pageFactory.dashbordpom;
import utils.driverutils;

public class Reports extends driverutils {

	public void dash(WebDriver driver) throws InterruptedException {
		/*
		 * WebDriverWait wait=new WebDriverWait(driver, 50); dashbordpom
		 * dash=new dashbordpom(driver); WebElement menuclick;
		 * 
		 * 
		 * menuclick=
		 * wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(
		 * "//div[contains(text(),'Menu')]"))); menuclick.click();
		 */
		Thread.sleep(4000);

	}

	public void notification() {
		Reportspom rept = new Reportspom(driver);
		rept.getnotiBtn().click();
	}

	public void reportdownload() throws InterruptedException {
		Reportspom rept = new Reportspom(driver);
		rept.getWorCapbtn().click();
		Thread.sleep(3000);

		rept.getDown().click();

		Thread.sleep(5000);

		rept.getAccNodpw().click();
		Thread.sleep(2000);

		rept.getAccountckbx().click();
		Thread.sleep(2000);

		rept.getEmpare().click();
		Thread.sleep(2000);

		rept.getRolldtbtn().click();

		rept.getDurationtxt().click();
		rept.getDurationtxt().clear();
		rept.getDurationtxt().sendKeys("Current Date - 12 months");
		rept.getDurationtxt().sendKeys(Keys.ARROW_DOWN);
		rept.getDurationtxt().sendKeys(Keys.ENTER);
		Thread.sleep(5000);

		rept.getExportbtn().click();
		Thread.sleep(5000);

		rept.getExportFbtn().click();
		Thread.sleep(5000);
		if(rept.getAccNodpw().isDisplayed())
		{
		System.out.println("Operating Account Statement Report for the duration \"Current Date - 12 months\" is downloaded successfully ");	
		}
		else
		{
			Assert.fail("Operating Account Statement Report for the duration \"Current Date - 12 months\" is not downloaded");
		}

	}
	
	public void oadReportaddcolumn() throws InterruptedException
	{
		Reportspom rept = new Reportspom(driver);
		rept.getWorCapbtn().click();
		Thread.sleep(3000);
		rept.getOperAccDtlstgbtn().click();
		
		for(WebElement el:rept.getRepcollst())
		{
			 JavascriptExecutor js = (JavascriptExecutor) driver;	
			
			if(el.getText().contains("Company")&&!(el.getAttribute("title").contains("Field already added")))
			{System.out.println(el.getText());
			js.executeScript("window.scrollBy(0,1000)");
				Actions builder = new Actions(driver);
				builder.dragAndDropBy(el, 395, 280).build().perform();
//				Thread.sleep(3000);
//				//builder.moveToElement(el).build();
//				Thread.sleep(2000);
//				js.executeScript("window.scrollBy(0,1000)");
//				 builder.clickAndHold(el);
//				 Thread.sleep(2000);
////				builder.dragAndDrop(el, rept.getDropcolmArea()).build().perform();
//				 System.out.println(rept.getDropcolmArea().getLocation());
//				 builder.moveByOffset(100,1000);
//				 builder.release().build().perform();
			/*Actions actions = new Actions(driver);
			
			actions.moveToElement(el).build();
			
			js.executeScript("window.scrollBy(0,1000)");
			actions.clickAndHold(el).moveByOffset(0, 100).moveToElement(rept.getDropcolmArea(), 0, 100).release().build().perform();
*/
			
			
			}else{
				System.out.println("not dropp");
			}
		}
	}

}
