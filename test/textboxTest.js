
import { Builder } from 'selenium-webdriver';
import { textboxPage } from '../page/textboxPage.js';

const driver = await new Builder()
    .forBrowser('chrome')
    .build();

const textbox = new textboxPage(driver);

try {
    await textbox.openBrowser("https://demoqa.com/text-box");
    await textbox.enterUserName('Adnan Hossain');
    await textbox.enterUserEmail('adnan.hossain@example.com');
    await textbox.enterUserAddress('Dhaka, Bangladesh');
    await textbox.enterUserPermanentAddress('Dhaka, Bangladesh');
    await textbox.clickSubmitButton();

} catch (error) {
    console.error('Automation failed:', error);
} finally {
    // await driver.quit();
}
