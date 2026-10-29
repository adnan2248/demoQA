import { Builder, By, until } from 'selenium-webdriver';
class base {
    constructor(driver) {
        this.driver = driver;
    }

    async waitForClickable(locator, timeout = 10000) {
        const element = await this.driver.wait(until.elementLocated(locator), timeout);
        await this.driver.wait(until.elementIsVisible(element), timeout);
        await this.driver.wait(until.elementIsEnabled(element), timeout);
        return element;
    }

    async clickWhenReady(locator, timeout = 10000) {
        const element = await this.waitForClickable(locator, timeout);
        await element.click();
    }

    async openBrowser(url) {
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }

    async closeBrowser() {
        await this.driver.quit();
    }
}

export { base };