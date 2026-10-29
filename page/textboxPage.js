import { By, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { base } from './base.js';


class textboxPage extends base {

    constructor(driver) {
        super(driver);


        this.userNameInput = By.id('userName');
        this.userEmailInput = By.id('userEmail');
        this.userAddressInput = By.id('currentAddress');
        this.userPermanentAddressInput = By.id('permanentAddress');
        this.submitButton = By.xpath("//button[@id='submit']"); 
    }

    async enterUserName(userName) {
        const userNameElement = await this.driver.findElement(this.userNameInput);
        await userNameElement.sendKeys(userName);
    }

    async enterUserEmail(userEmail) {
        const userEmailElement = await this.driver.findElement(this.userEmailInput);
        await userEmailElement.sendKeys(userEmail);
    }

    async enterUserAddress(userAddress) {
        const userAddressElement = await this.driver.findElement(this.userAddressInput);
        await userAddressElement.sendKeys(userAddress);
    }   

    async enterUserPermanentAddress(userPermanentAddress) {
        const userPermanentAddressElement = await this.driver.findElement(this.userPermanentAddressInput);
        await userPermanentAddressElement.sendKeys(userPermanentAddress);
    }



async clickSubmitButton() {
    const submitButtonElement = await this.driver.findElement(this.submitButton);

    await this.driver.executeScript("arguments[0].scrollIntoView({block: 'center'});",submitButtonElement);

    await this.driver.wait(until.elementIsVisible(submitButtonElement),5000);

    await this.driver.wait(until.elementIsEnabled(submitButtonElement),5000);

    await submitButtonElement.click();
}









}

export { textboxPage };