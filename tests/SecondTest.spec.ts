import { test , expect } from '@playwright/test';

    test('Second test', async({page})=>{
        await page.goto('https://github.com/');
        expect(page.url()).toBe('https://github.com/');
        await page.locator("//a[contains(text(),'   Sign up')]").click();
        await page.waitForSelector('//span[@class="text-mono text-gray-light-mktg"]');
        const element = await page.locator('//span[@class="text-mono text-gray-light-mktg"]').first();
        expect(await element.textContent()).not.toBe('');
        await page.fill('//input[@id="email"]','rom.trotsiuk@gmail.com');
        await page.locator('//button[@data-continue-to="password-container"]').click();
        await page.fill('//input[@id="password"]','Roma12358947');
        await page.locator('//button[@data-continue-to="username-container"]').click();
        await page.fill('//input[@id="login"]','Arcturus32-0');
        await page.locator('//button[@data-continue-to="opt-in-container"]').click();
        await page.locator('//input[@name="opt_in"]').click();
        await page.locator('//button[@data-continue-to="captcha-and-submit-container"]').click();
        await page.waitForSelector('//div[@class="text-mono text-bold signup-text-prompt mt-4 px-sm-0 px-4"]');
        const element1 = await page.locator('//div[@class="text-mono text-bold signup-text-prompt mt-4 px-sm-0 px-4"]').first();
        expect(await element1.textContent()).not.toBe('');
        await page.locator('//a[@aria-label="Homepage"][@href="https://github.com/"]').click();
        await page.locator('//span[@class="flex-1"]').click();
        await page.fill('//input[@id="query-builder-test"]','romatrot/test-project'); 
        await page.locator('//span[@class=""]').click();
        await page.locator('//span[@class="Text-sc-17v1xeu-0 qaOIC search-match"]').click();
        expect(page.url()).toBe('https://github.com/romatrot/test-project');
    })