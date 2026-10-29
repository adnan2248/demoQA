import { Builder } from 'selenium-webdriver';
import { doubleClickbuttonPage } from '../page/doubleClickbuttonPage.js';

const driver = await new Builder()
    .forBrowser('chrome')
    .build();

const buttons = new doubleClickbuttonPage(driver);

try {
    await buttons.openBrowser('https://demoqa.com/buttons');

    await buttons.doubleClickMe();

    const message = await buttons.getDoubleClickMessage();

    console.log('Double-click message:', message);

} catch (error) {
    console.error('Automation failed:', error);
} finally {
    //await driver.quit();
}