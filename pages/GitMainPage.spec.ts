import { expect, type Locator, type Page } from '@playwright/test';

export class GitMainPage{
    readonly page: Page;
    readonly gitButton: Locator;
    readonly gitTerminal: Locator;
    readonly gitFullTerminall: Locator;
    readonly searchButton: Locator;
    readonly SignUpButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.gitButton=page.locator('//a[@aria-label="Homepage"][@href="https://github.com/"]');
        this.gitTerminal=page.locator('//span[@class="flex-1"]');
        this.gitFullTerminall=page.locator('//input[@id="query-builder-test"]');
        this.searchButton=page.locator('//span[text()="Search all of GitHub"][@class="ActionListItem-description QueryBuilder-ListItem-trailing"][1]');
        this.SignUpButton=page.locator("//a[contains(text(),'   Sign up')]");
    }

    async goto() {
        await this.page.goto('https://github.com/');
        expect(this.page.url()).toBe('https://github.com/');
    }

    async clickSignUpButton(){
        await this.SignUpButton.click();
    }

    async clickgitButton(){
        await this.gitButton.click();
    }

    async findOnTerminal(){
        await this.gitTerminal.click();
        await this.gitFullTerminall.fill('romatrot/test-project');
        await this.searchButton.click();
    }

    async expectFinallUrl(){
        expect(this.page.url()).toBe('https://github.com/search?q=romatrot%2Ftest-project&type=repositories');
    }
}