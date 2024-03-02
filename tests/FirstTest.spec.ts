import { test, expect } from '@playwright/test';

    test('First test', async ({ page }) => {
        await page.goto('https://lntu.edu.ua/uk');
        await page.waitForTimeout(3000);
        const pageTitle = await page.locator('//div[contains(@class, "menu-item")]').textContent();
        expect(pageTitle).toContain('Головна');
    });

    test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });
