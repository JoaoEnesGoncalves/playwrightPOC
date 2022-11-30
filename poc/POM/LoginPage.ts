import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly login: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputUsername = page.getByLabel('Username or email');
        this.inputPassword = page.getByLabel('Password');
        this.login = page.getByRole('button', { name: 'Log In' });
    }

    async goto() {
        await this.page.goto('https://ldos-qa-mlf-01.lis.eng.hitachivantara.com/hitachi-solutions/dataflow-studio/dataflow-studio-app/dataflow-manager/#/dataflows');
    }

    async summitCredentials( user: string, password: string) {
        await this.inputUsername.fill(user);
        await this.inputPassword.fill(password);
        await this.login.click();
    }

}
