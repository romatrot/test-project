import { expect, type Locator, type Page } from '@playwright/test';

export class GitRegistrationPage{
    readonly page: Page;
    readonly firstSelector: string;
    readonly textFirstSelector: Locator;
    readonly InputEmail: Locator;
    readonly continueEmail: Locator;
    readonly InputPassword: Locator;
    readonly continuePassword: Locator;
    readonly InputLogin: Locator;
    readonly continueLogin: Locator;
    readonly checkBox: Locator;
    readonly continueCheckBox: Locator;
    readonly secondSelector: string;
    readonly textSecondSelector: Locator;

    constructor(page: Page){
        this.page=page;
        this.firstSelector='//span[@class="text-mono text-gray-light-mktg"]';
        this.textFirstSelector=page.locator('//span[@class="text-mono text-gray-light-mktg"]');
        this.InputEmail=page.locator('//input[@id="email"]');
        this.continueEmail=page.locator('//button[@data-continue-to="password-container"]');
        this.InputPassword=page.locator('//input[@id="password"]');
        this.continuePassword=page.locator('//button[@data-continue-to="username-container"]');
        this.InputLogin=page.locator('//input[@id="login"]');
        this.continueLogin=page.locator('//button[@data-continue-to="opt-in-container"]');
        this.checkBox=page.locator('//input[@name="opt_in"]');
        this.continueCheckBox=page.locator('//button[@data-continue-to="captcha-and-submit-container"]');
        this.secondSelector='//div[@class="text-mono text-bold signup-text-prompt mt-4 px-sm-0 px-4"]';
        this.textSecondSelector=page.locator('//div[@class="text-mono text-bold signup-text-prompt mt-4 px-sm-0 px-4"]');
    }

    async WaitFirstSelector(){
        await this.page.waitForSelector(this.firstSelector);
    }

    async ExpectFirstTextSelector(){
        const element1 = this.textFirstSelector.first();
        expect(await element1.textContent()).not.toBe('');
    }
    
    async inputEmail(){
        await this.InputEmail.fill('rom.trotsiuk@gmail.com');
        await this.continueEmail.click();
    }

    async inputpassword(){
        await this.InputPassword.fill('Roma12358947');
        await this.continuePassword.click();
    }

    async inputUsername(){
        await this.InputLogin.fill('Arcturus32-0');
        await this.continueLogin.click();
    }

    async clickCheckBox(){
        await this.checkBox.click();
        await this.continueCheckBox.click();
    }

    async WaitSecondSelector(){
        await this.page.waitForSelector(this.secondSelector);
    }

    async ExpectSecondTextSelector(){
        const element2 = this.textSecondSelector.first();
        expect(await element2.textContent()).not.toBe('');
    }
}