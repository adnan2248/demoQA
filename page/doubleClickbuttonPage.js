import { By } from 'selenium-webdriver';
import { base } from './base.js';

class doubleClickbuttonPage extends base {
    constructor(driver) {
        super(driver);

        this.doubleClickButton = By.id('doubleClickBtn');
        this.doubleClickMessage = By.id('doubleClickMessage');
    }

    async doubleClickMe() {
        const button = await this.driver.findElement(
            this.doubleClickButton
        );

        await this.driver.actions()
            .doubleClick(button)
            .perform();
    }

    async getDoubleClickMessage() {
        const message = await this.driver.findElement(
            this.doubleClickMessage
        );

        return await message.getText();
    }
}

export { doubleClickbuttonPage };